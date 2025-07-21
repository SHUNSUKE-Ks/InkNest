import React from 'react';
import '../../styles/AvatarChangeModal.css'; // スタイルシートをインポート

const AvatarChangeModal = ({ avatars, onSelectAvatar, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Select an Avatar</h3>
        <div className="avatar-grid">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar.url}
              alt={avatar.name || `Avatar ${index + 1}`}
              className="avatar-item"
              onClick={() => onSelectAvatar(avatar.url)}
            />
          ))}
        </div>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default AvatarChangeModal;
