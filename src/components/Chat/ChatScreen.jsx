import React, { useState, useEffect } from 'react';
import KeyMap from '../../MenuDB/08_Setting/KeyMap'; // KeyMapをインポート
import NovelTalkDisplay from '../NovelTalkSystem/NovelTalkDisplay';
import MessageInput from './MessageInput';
import UserSelectionBar from './UserSelectionBar';
import { getMessages, sendMessage, deleteMessage } from '../../services/chatService';
import '../../styles/ChatScreen.css';

const ChatScreen = ({ room, onBack, currentUser, users, onSendMessage, shouldFocusInput }) => {
  const [messages, setMessages] = useState([]);
  const [selectedSender, setSelectedSender] = useState(null);
  const [showKeyMap, setShowKeyMap] = useState(false); // KeyMap表示状態
  const [isInputFocused, setIsInputFocused] = useState(false); // 入力フィールドのフォーカス状態

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

  return (
    <div className="chat-screen">
      <header className="chat-header">
        <button onClick={onBack}>←</button>
        <h2>{room.name}</h2>
        <button onClick={handleToggleKeyMap} className="keymap-icon-button">
          ⌨️ {/* キーボードアイコン */}
        </button>
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
          />
          <UserSelectionBar users={users} selectedSender={selectedSender} onSelectUser={handleSelectSender} />
          <MessageInput onSendMessage={handleSendMessage} shouldFocus={shouldFocusInput} />
        </>
      )}
    </div>
  );
};

export default ChatScreen;
