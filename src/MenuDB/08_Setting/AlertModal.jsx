import React from 'react';
import './KeyMap.css'; // 既存のスタイルを一部流用

const AlertModal = ({ show, onClose, title, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="keymap-overlay">
      <div className="keymap-container">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="keymap-actions">
          <button onClick={onClose} className="keymap-close-button">閉じる</button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
