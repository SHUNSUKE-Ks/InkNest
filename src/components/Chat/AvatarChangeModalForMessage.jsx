import React from 'react';
import '../../styles/AvatarChangeModalForMessage.css'; // スタイルシートをインポート

const AvatarChangeModalForMessage = ({ users, onSelectNewSender, onClose }) => {
  return (
    <div className="avatar-change-modal-overlay" onClick={onClose}>
      <div className="avatar-change-modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>アイコンを選択</h3>
        <div className="avatar-list">
          {users.map(user => (
            <div
              key={user.id}
              className="avatar-item"
              onClick={() => {
                onSelectNewSender(user.id);
                onClose();
              }}
            >
              <img src={user.avatar || 'https://via.placeholder.com/40'} alt={user.name} className="avatar-image" />
              <span className="avatar-name">{user.name}</span>
            </div>
          ))}
        </div>
        <button onClick={onClose} className="close-button">閉じる</button>
      </div>
    </div>
  );
};

export default AvatarChangeModalForMessage;
