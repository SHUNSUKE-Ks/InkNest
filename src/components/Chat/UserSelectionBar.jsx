import React from 'react';
import '../../styles/UserSelectionBar.css';

const UserSelectionBar = ({ users, selectedSender, onSelectUser }) => {
  return (
    <div className="user-selection-bar">
      {users.map(user => (
        <div
          key={user.id}
          className={`user-selection-item ${selectedSender && selectedSender.id === user.id ? 'selected' : ''}`}
          onClick={() => onSelectUser(user)}
        >
          <img src={user.avatar || 'https://via.placeholder.com/40'} alt={user.name} className="user-selection-avatar" />
          <span className="user-selection-name">{user.name}</span>
        </div>
      ))}
    </div>
  );
};

export default UserSelectionBar;
