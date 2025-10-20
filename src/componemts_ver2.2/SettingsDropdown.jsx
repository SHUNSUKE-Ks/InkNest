import React from 'react';
import { useStateContext } from '../context/StateContext';
import './SettingsDropdown.css';

const SettingsDropdown = () => {
  const { isDarkMode, setIsDarkMode } = useStateContext();

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="settings-dropdown">
      <div className="setting-item">
        <label htmlFor="dark-mode-toggle">Dark Mode</label>
        <label className="switch">
          <input
            id="dark-mode-toggle"
            type="checkbox"
            checked={isDarkMode}
            onChange={handleToggle}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default SettingsDropdown;