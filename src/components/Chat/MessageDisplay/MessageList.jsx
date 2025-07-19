import React from 'react';
import '../../../styles/MessageList.css';

const MessageList = ({ messages, users, currentUser }) => {
  const getUserInfo = (userId) => {
    const user = users.find(u => u.id === userId);
    return user ? user : { name: 'Unknown User', avatar: 'https://via.placeholder.com/40' };
  };

  return (
    <div className="message-list">
      {messages.map(message => {
        const userInfo = getUserInfo(message.senderId);
        const isCurrentUser = currentUser && message.senderId === currentUser.uid;
        return (
          <div key={message.id} className={`message ${isCurrentUser ? 'message-sent' : 'message-received'}`}>
            {!isCurrentUser && (
              <img src={userInfo.avatar || 'https://via.placeholder.com/40'} alt={userInfo.name} className="message-avatar" />
            )}
            <div className="message-content">
              {!isCurrentUser && <div className="message-sender">{userInfo.name}</div>}
              <p className="message-text">{message.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
