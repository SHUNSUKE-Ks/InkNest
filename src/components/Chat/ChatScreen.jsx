import React, { useState, useEffect } from 'react';
import KeyMap from '../../MenuDB/08_Setting/KeyMap'; // KeyMapをインポート
import NovelTalkDisplay from '../NovelTalkSystem/NovelTalkDisplay';
import MessageInput from './MessageInput';
import UserSelectionBar from './UserSelectionBar';
import { getMessages, sendMessage, deleteMessage } from '../../services/chatService';
import '../../styles/ChatScreen.css';

const ChatScreen = ({ room, onBack, currentUser, users, onSendMessage, shouldFocusInput }) => {
  const [messages, setMessages] = useState([]);
  const [editingMessageId, setEditingMessageId] = useState(null); // NovelTalkDisplayからリフトアップ
  const [selectedSender, setSelectedSender] = useState(null);

  useEffect(() => {
    if (users && users.length > 0 && !selectedSender) {
      setSelectedSender(users[0]);
    }
  }, [users, selectedSender]);
  const [showKeyMap, setShowKeyMap] = useState(false); // KeyMap表示状態
  const [isInputFocused, setIsInputFocused] = useState(false); // 入力フィールドのフォーカス状態
  const [keepKeyboardOpen, setKeepKeyboardOpen] = useState(false); // キーボード表示維持の状態

  useEffect(() => {
    const unsubscribe = getMessages(room.id, (fetchedMessages) => {
      setMessages(fetchedMessages);
    });
    return () => unsubscribe();
  }, [room.id]);

  const handleSelectSender = (user) => {
    setSelectedSender(user);
  };

  const handleSendMessage = async (messageText) => {
    if (!selectedSender) {
      alert("Please select a user to send message.");
      return;
    }
    await sendMessage(room.id, selectedSender.id, messageText);
  };

  const handleDeleteMessage = async (messageId) => {
    await deleteMessage(room.id, messageId);
  };

  const handleDeleteSelectedMessages = async (messageIds) => {
    for (const messageId of messageIds) {
      await deleteMessage(room.id, messageId);
    }
  };

  const handleToggleKeyMap = () => {
    setShowKeyMap(prev => !prev);
  };

  const handleInputFocusChange = (isFocused) => { // MessageInputからのフォーカス変更ハンドラ
    setIsInputFocused(isFocused);
  };

  const handleAddMessageAt = (currentMessageId, senderId) => {
    setMessages(prevMessages => {
      const currentIndex = prevMessages.findIndex(msg => msg.id === currentMessageId);
      if (currentIndex === -1) return prevMessages;

      const newMessage = {
        id: Date.now().toString(), // Simple unique ID for now
        senderId: senderId,
        text: '',
        timestamp: new Date().toISOString(),
      };

      const newMessages = [
        ...prevMessages.slice(0, currentIndex + 1),
        newMessage,
        ...prevMessages.slice(currentIndex + 1),
      ];
      setEditingMessageId(newMessage.id); // 新しいメッセージを編集モードにする
      return newMessages;
    });
  };

  const [novelTalkDisplayReset, setNovelTalkDisplayReset] = useState(null); // NovelTalkDisplayのリセット関数を保持

  const resetNovelTalkDisplayState = () => {
    console.log('resetNovelTalkDisplayState called');
    if (novelTalkDisplayReset) {
      novelTalkDisplayReset();
    } else {
      console.log('novelTalkDisplayReset is null or undefined');
    }
  };

  useEffect(() => {
    const handleCtrlQ = (event) => {
      if (event.ctrlKey && event.key.toLowerCase() === 'q') {
        console.log('Ctrl + Q detected in ChatScreen');
        event.preventDefault(); // Prevent default browser behavior (e.g., closing tab)
        setShowKeyMap(false); // Close KeyMap if open
        resetNovelTalkDisplayState(); // Reset NovelTalkDisplay states
      }
    };

    const handleCtrlNumber = (event) => {
      if (event.ctrlKey && event.key >= '0' && event.key <= '9') {
        const index = parseInt(event.key, 10);
        if (users && users.length > index) {
          event.preventDefault(); // Prevent default browser behavior
          setSelectedSender(users[index]);
          console.log(`Selected user: ${users[index].name} via Ctrl+${index}`);
        }
      }
    };

    window.addEventListener('keydown', handleCtrlQ);
    window.addEventListener('keydown', handleCtrlNumber);

    return () => {
      window.removeEventListener('keydown', handleCtrlQ);
      window.removeEventListener('keydown', handleCtrlNumber);
    };
  }, [users, novelTalkDisplayReset]); // Add users to dependency array

  return (
    <div className="chat-screen">
      <header className="chat-header">
        <button onClick={onBack}>←</button>
        <h2>{room.name}</h2>
        <button onClick={handleToggleKeyMap} className="keymap-icon-button">
          ⌨️ {/* キーボードアイコン */}
        </button>
        <label className="keyboard-toggle-label">
          <input
            type="checkbox"
            checked={keepKeyboardOpen}
            onChange={(e) => setKeepKeyboardOpen(e.target.checked)}
          />
          キーボード維持
        </label>
      </header>
      {showKeyMap ? (
        <KeyMap onClose={handleToggleKeyMap} isInputFocused={isInputFocused} /> // isInputFocusedを渡す
      ) : (
        <>
          <NovelTalkDisplay
            messages={messages}
            users={users}
            currentUser={selectedSender}
            room={room}
            onDeleteMessage={handleDeleteMessage}
            onDeleteSelectedMessages={handleDeleteSelectedMessages}
            editingMessageId={editingMessageId} // 渡す
            setEditingMessageId={setEditingMessageId} // 渡す
            onAddMessageAt={handleAddMessageAt} // 渡す
            setResetNovelTalkDisplayFunction={setNovelTalkDisplayReset} // 新しく追加
          />
          <UserSelectionBar users={users} selectedSender={selectedSender} onSelectUser={handleSelectSender} />
          <MessageInput onSendMessage={handleSendMessage} shouldFocus={shouldFocusInput} keepKeyboardOpen={keepKeyboardOpen} />
        </>
      )}
    </div>
  );
};

export default ChatScreen;
