import React, { useState, useRef, useEffect } from 'react';
import { updateMessage, sendMessage } from '../../services/chatService'; // sendMessageをインポート
import './NovelTalk.css';

const NovelTalkDisplay = ({ messages, users, currentUser, room, onDeleteMessage, onDeleteSelectedMessages }) => {
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [showEmojiPickerId, setShowEmojiPickerId] = useState(null);
  const [longPressedMessageId, setLongPressedMessageId] = useState(null); // 長押し中のメッセージID
  const [selectedMessages, setSelectedMessages] = useState([]); // 複数選択用
  const longPressTimer = useRef(null); // タイマー参照
  const messagesEndRef = useRef(null); // スクロール対象の要素への参照
  const displayRef = useRef(null); // 画面全体への参照

  const emojis = ['😀', '😂', '😊', '😍', '😢', '😡', '🤔', '👍'];

  const getUserInfo = (userId) => {
    const user = users.find(u => u.id === userId);
    return user ? user : { name: 'Unknown User', avatar: 'https://via.placeholder.com/40' };
  };

  const handleEditClick = (message) => {
    // longPressedMessageIdがある場合は編集モードではなく、チェックボックスのクリックとして扱う
    if (!longPressedMessageId) {
      setEditingMessageId(message.id);
      setEditingText(message.text);
    }
  };

  const handleSaveEdit = async (messageId) => {
    if (editingText.trim() === '') {
      alert('メッセージは空にできません。');
      setEditingMessageId(null);
      return;
    }
    await updateMessage(room.id, messageId, editingText);
    setEditingMessageId(null);
    setEditingText('');
  };

  const handleAvatarClick = (messageId) => {
    setShowEmojiPickerId(showEmojiPickerId === messageId ? null : messageId);
  };

  const handleEmojiSelect = async (messageId, emoji) => {
    const messageToUpdate = messages.find(msg => msg.id === messageId);
    if (messageToUpdate) {
      const newText = `${messageToUpdate.text} ${emoji}`;
      await updateMessage(room.id, messageId, newText);
    }
    setShowEmojiPickerId(null);
  };

  const handleLongPressStart = (messageId) => {
    longPressTimer.current = setTimeout(() => {
      setLongPressedMessageId(messageId);
      setSelectedMessages([messageId]); // 長押ししたメッセージを選択状態にする
    }, 500);
  };

  const handleLongPressEnd = () => {
    clearTimeout(longPressTimer.current);
    longPressTimer.current = null;
  };

  const handleDeleteClick = () => {
    if (selectedMessages.length > 0) {
      if (window.confirm(`${selectedMessages.length}件のメッセージを削除してもよろしいですか？`)) {
        onDeleteSelectedMessages(selectedMessages);
        setLongPressedMessageId(null);
        setSelectedMessages([]);
      }
    } else if (longPressedMessageId) { // 単一削除の場合（長押しでゴミ箱表示中の場合）
      if (window.confirm('このメッセージを削除してもよろしいですか？')) {
        onDeleteMessage(longPressedMessageId);
        setLongPressedMessageId(null);
        setSelectedMessages([]);
      }
    }
  };

  // チェックボックスの変更ハンドラ
  const handleCheckboxChange = (messageId) => {
    setSelectedMessages(prevSelected =>
      prevSelected.includes(messageId)
        ? prevSelected.filter(id => id !== messageId)
        : [...prevSelected, messageId]
    );
  };

  // 新しいテキストボックスを追加する関数
  const handleAddTextBox = async (currentMessageId) => {
    // 現在編集中のメッセージのインデックスを見つける
    const currentIndex = messages.findIndex(msg => msg.id === currentMessageId);
    if (currentIndex === -1) return;

    // 新しいメッセージのデータを準備（仮の送信者と空のテキスト）
    const newSenderId = currentUser ? currentUser.uid : users[0]?.id; // 現在のユーザーまたは最初のユーザー
    if (!newSenderId) {
      alert("メッセージを追加するユーザーが選択されていません。");
      return;
    }
    const newText = ""; // 空のテキストボックス

    // Firebaseに新しいメッセージを送信
    // sendMessageは新しいメッセージを末尾に追加するので、ここでは直接挿入はできない
    // 実際には、Firebaseのトランザクションやバッチ処理で順序を考慮する必要がある
    // ここでは簡略化のため、新しいメッセージを送信し、その後編集モードにする
    await sendMessage(room.id, newSenderId, newText);

    // 新しいメッセージが追加された後、そのメッセージを編集モードにする
    // Firebaseのリアルタイムリスナーがメッセージリストを更新するので、
    // その後で新しいメッセージのIDを取得して編集モードにする必要があるが、
    // ここでは簡略化のため、一旦編集モードを解除する
    setEditingMessageId(null);
    setEditingText('');
    // 理想的には、新しいメッセージのIDを取得してsetEditingMessageId(newId)とする
  };


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // クリックされた要素がdisplayRefの内部になく、かつゴミ箱状態の場合
      // ただし、ゴミ箱アイコン自体やチェックボックスのクリックは除外
      if (longPressedMessageId && displayRef.current && !displayRef.current.contains(event.target)) {
        // クリックされた要素がゴミ箱アイコンまたはチェックボックスでないことを確認
        const isDeleteIcon = event.target.closest('.delete-icon');
        const isCheckbox = event.target.closest('.message-checkbox');
        if (!isDeleteIcon && !isCheckbox) {
          setLongPressedMessageId(null);
          setSelectedMessages([]);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [longPressedMessageId]);

  return (
    <div className="novel-talk-display" ref={displayRef}> {/* refを追加 */}
      {messages.map(message => {
        const userInfo = getUserInfo(message.senderId);
        const isEditing = editingMessageId === message.id;
        const isLongPressed = longPressedMessageId === message.id;
        const isSelected = selectedMessages.includes(message.id);

        return (
          <div
            key={message.id}
            className={`novel-talk-message ${isSelected ? 'selected' : ''}`}
            onMouseDown={(e) => {
              if (!longPressedMessageId) handleLongPressStart(message.id);
            }}
            onMouseUp={handleLongPressEnd}
            onMouseLeave={handleLongPressEnd}
            onTouchStart={(e) => {
              if (!longPressedMessageId) handleLongPressStart(message.id);
            }}
            onTouchEnd={handleLongPressEnd}
            onTouchCancel={handleLongPressEnd}
          >
            <div className="novel-talk-avatar-container">
              <img
                src={userInfo.avatar || 'https://via.placeholder.com/40'}
                alt={userInfo.name}
                className="novel-talk-avatar"
                onClick={() => handleAvatarClick(message.id)}
              />
              {showEmojiPickerId === message.id && (
                <div className="emoji-picker">
                  {emojis.map((emoji, index) => (
                    <span
                      key={index}
                      className="emoji-item"
                      onClick={() => handleEmojiSelect(message.id, emoji)}
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
              )}
              </div>
            <div className="novel-talk-content">
              <div className="novel-talk-sender">{userInfo.name}</div>
              {isEditing ? (
                <>
                  <textarea
                    className="novel-talk-edit-area"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onBlur={() => handleSaveEdit(message.id)}
                    autoFocus
                    maxLength={60}
                  />
                  {longPressedMessageId && ( // 編集モードかつゴミ箱表示中の場合のみチェックボックスを表示
                    <div className="message-checkbox-container">
                      <input
                        type="checkbox"
                        className="message-checkbox"
                        checked={isSelected}
                        onChange={() => handleCheckboxChange(message.id)}
                      />
                    </div>
                  )}
                  <button className="add-textbox-button" onClick={() => handleAddTextBox(message.id)}>
                    +
                  </button>
                </>
              ) : (
                <div className="novel-talk-text" onClick={() => handleEditClick(message)}>
                  {message.text}
                  {longPressedMessageId && ( // 表示モードかつゴミ箱表示中の場合のみチェックボックスを表示
                    <div className="message-checkbox-container">
                      <input
                        type="checkbox"
                        className="message-checkbox"
                        checked={isSelected}
                        onChange={() => handleCheckboxChange(message.id)}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
            {longPressedMessageId && (
              <div className="delete-icon" onClick={handleDeleteClick}>
                🗑️
              </div>
            )}
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default NovelTalkDisplay;