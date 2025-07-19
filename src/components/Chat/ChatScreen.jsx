import React, { useState, useEffect } from 'react';
import MessageList from './MessageDisplay/MessageList';
import MessageInput from './MessageInput';
import UserSelectionBar from './UserSelectionBar';
import { getMessages, sendMessage } from '../../services/chatService';
import '../../styles/ChatScreen.css';

const ChatScreen = ({ room, onBack, currentUser, users }) => {
  const [messages, setMessages] = useState([]);
  const [selectedSender, setSelectedSender] = useState(null); // 選択中の送信者

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

  return (
    <div className="chat-screen">
      <header className="chat-header">
        <button onClick={onBack}>←</button>
        <h2>{room.name}</h2>
      </header>
      <MessageList messages={messages} users={users} currentUser={selectedSender} />
      <UserSelectionBar users={users} selectedSender={selectedSender} onSelectUser={handleSelectSender} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatScreen;
