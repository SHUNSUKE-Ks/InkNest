import React, { useState } from 'react';
import '../../../styles/NovelTalkDisplay.css'; // 新しいCSSファイルを後で作成します

const NovelTalkDisplay = ({ messages, users, currentUser }) => {
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const getUserInfo = (userId) => {
    const user = users.find(u => u.id === userId);
    return user ? user : { name: 'Unknown User', avatar: 'https://via.placeholder.com/40' };
  };

  const handleEditClick = (message) => {
    setEditingMessageId(message.id);
    setEditingText(message.text);
  };

  const handleSaveEdit = (messageId) => {
    // ここでメッセージの更新処理を呼び出します（後で実装）
    console.log(`Saving message ${messageId} with text: ${editingText}`);
    setEditingMessageId(null);
    setEditingText('');
  };

  return (
    <div className="novel-talk-display">
      {messages.map(message => {
        const userInfo = getUserInfo(message.senderId);
        const isEditing = editingMessageId === message.id;

        return (
          <div key={message.id} className="novel-talk-message">
            <div className="novel-talk-avatar-container">
              <img src={userInfo.avatar || 'https://via.placeholder.com/40'} alt={userInfo.name} className="novel-talk-avatar" />
              {/* アイコンクリック時の絵文字選択UIは後でここに追加 */}
            </div>
            <div className="novel-talk-content">
              <div className="novel-talk-sender">{userInfo.name}</div>
              {isEditing ? (
                <textarea
                  className="novel-talk-edit-area"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onBlur={() => handleSaveEdit(message.id)}
                  autoFocus
                />
              ) : (
                <div className="novel-talk-text" onClick={() => handleEditClick(message)}>
                  {message.text}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NovelTalkDisplay;
