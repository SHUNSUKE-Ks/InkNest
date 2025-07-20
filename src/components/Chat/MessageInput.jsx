import React, { useState, useRef, useEffect } from 'react';
import '../../styles/MessageInput.css';
import { useStateContext } from '../../context/StateContext';

const MessageInput = ({ onSendMessage, shouldFocus }) => {
  const [message, setMessage] = useState('');
  const { setAppState } = useStateContext();
  const inputRef = useRef(null);

  useEffect(() => {
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [shouldFocus]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.ctrlKey) {
      e.stopPropagation();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form className="message-input-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="message-input-field"
        onFocus={() => setAppState('テキスト入力中')}
        onBlur={() => setAppState('デフォルト')}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" className="message-send-button">Send</button>
    </form>
  );
};

export default MessageInput;
