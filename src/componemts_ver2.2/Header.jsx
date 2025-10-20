import React from 'react';
import './Header.css';

const Header = ({ title, onNewPageClick }) => {
  return (
    <header className="app-header">
      <div className="header-left">
        <span>{title}</span>
      </div>
      <div className="header-right">
        <button onClick={onNewPageClick} className="new-page-button">新規ページ</button>
      </div>
    </header>
  );
};

export default Header;