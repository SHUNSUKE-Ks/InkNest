import React, { useState, useRef, useEffect } from 'react';
import { updateMessage, sendMessage } from '../../services/chatService'; // sendMessageをインポート
import AvatarChangeModalForMessage from '../Chat/AvatarChangeModalForMessage'; // 新しいモーダルをインポート
import './NovelTalk.css';

const NovelTalkDisplay = ({ messages, users, currentUser, room, onDeleteMessage, onDeleteSelectedMessages, editingMessageId, setEditingMessageId, onAddMessageAt, setResetNovelTalkDisplayFunction }) => {
  const [editingText, setEditingText] = useState('');
  const [showEmojiPickerId, setShowEmojiPickerId] = useState(null);
  const [showAvatarChangeModalId, setShowAvatarChangeModalId] = useState(null); // 新しいステートを追加
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
    if (showEmojiPickerId === messageId) {
      // 絵文字ピッカーが表示されている状態で再度クリックされたら、アイコン変更モーダルを開く
      setShowAvatarChangeModalId(messageId);
      setShowEmojiPickerId(null); // 絵文字ピッカーは閉じる
    } else {
      // それ以外の場合は絵文字ピッカーの表示を切り替える
      setShowEmojiPickerId(messageId);
    }
  };

  const handleUpdateMessageSender = async (messageId, newSenderId) => {
    await updateMessage(room.id, messageId, undefined, newSenderId);
    setShowAvatarChangeModalId(null); // モーダルを閉じる
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
  const handleAddTextBox = (currentMessageId) => {
    const newSenderId = currentUser ? currentUser.id : users[0]?.id; // 現在のユーザーまたは最初のユーザー
    if (!newSenderId) {
      alert("メッセージを追加するユーザーが選択されていません。");
      return;
    }
    onAddMessageAt(currentMessageId, newSenderId);
  };


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 親コンポーネントにリセット関数を渡す
  useEffect(() => {
    if (setResetNovelTalkDisplayFunction) {
      console.log('NovelTalkDisplay: Passing reset function to parent');
      setResetNovelTalkDisplayFunction(() => {
        console.log('NovelTalkDisplay: Executing reset function');
        setEditingText('');
        setShowEmojiPickerId(null);
        setShowAvatarChangeModalId(null);
        setLongPressedMessageId(null);
        setSelectedMessages([]);
        setEditingMessageId(null); // 親のeditingMessageIdもリセット
      });
    }
  }, [setResetNovelTalkDisplayFunction, setEditingMessageId]);

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
              {showEmojiPickerId === message.id && (
                <div className="avatar-change-overlay" onClick={() => {
                  setShowAvatarChangeModalId(message.id);
                  setShowEmojiPickerId(null);
                }}>
                  <span className="avatar-change-label">Icon変更</span>
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

      {showAvatarChangeModalId && (
        <AvatarChangeModalForMessage
          users={users}
          onSelectNewSender={(newSenderId) => handleUpdateMessageSender(showAvatarChangeModalId, newSenderId)}
          onClose={() => setShowAvatarChangeModalId(null)}
        />
      )}
    </div>
  );
};

export default NovelTalkDisplay;