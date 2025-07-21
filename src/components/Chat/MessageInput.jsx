import React, { useState, useRef, useEffect } from 'react';
import '../../styles/MessageInput.css';
import { useStateContext } from '../../context/StateContext';

const MessageInput = ({ onSendMessage, shouldFocus, keepKeyboardOpen }) => {
  const [message, setMessage] = useState('');
  const { setAppState } = useStateContext();
  const inputRef = useRef(null);

  useEffect(() => {
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [shouldFocus]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.ctrlKey) {
        e.preventDefault(); // Prevent default new line in textarea
        handleSubmit(e);
      } else {
        e.stopPropagation(); // Prevent form submission on Enter alone
        // Allow default newline behavior for textarea
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
      if (keepKeyboardOpen && inputRef.current) {
        inputRef.current.focus(); // 送信後にフォーカスを戻す
      }
    }
  };

  return (
    <form className="message-input-form" onSubmit={handleSubmit}>
      <textarea
        ref={inputRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="message-input-field"
        onFocus={() => setAppState('テキスト入力中')}
        onBlur={() => setAppState('デフォルト')}
        onKeyDown={handleKeyDown}
        rows={3}
      ></textarea>
      <button type="submit" className="message-send-button">Send</button>
    </form>
  );
};

export default MessageInput;
