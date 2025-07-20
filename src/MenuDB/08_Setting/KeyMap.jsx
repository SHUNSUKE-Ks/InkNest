import React, { useState, useEffect } from 'react';
import './KeyMap.css';

// キーマップの初期値をエクスポート
export const initialKeyMaps = {
  "デフォルト": [
    { action: "テキスト入力中にステートを移行", mainKey: "Space", altKey: "numpad0" },
    { action: "設定画面", mainKey: "Ctrl+Space", altKey: "" },
  ],
  "テキスト入力中": [
    { action: "改行", mainKey: "Enter", altKey: "" },
    { action: "投稿", mainKey: "Ctrl+Enter", altKey: "" },
  ],
};

const KeyMap = ({ onClose }) => {
  const [editableKeyMaps, setEditableKeyMaps] = useState(() => {
    const savedKeyMaps = localStorage.getItem('userKeyMaps');
    return savedKeyMaps ? JSON.parse(savedKeyMaps) : initialKeyMaps;
  });

  const handleKeyChange = (stateCategory, index, keyType, value) => {
    setEditableKeyMaps(prevKeyMaps => {
      const newKeyMaps = { ...prevKeyMaps };
      newKeyMaps[stateCategory] = newKeyMaps[stateCategory].map((item, i) =>
        i === index ? { ...item, [keyType]: value } : item
      );
      return newKeyMaps;
    });
  };

  const handleApply = () => {
    localStorage.setItem('userKeyMaps', JSON.stringify(editableKeyMaps));
    console.log("適用されたキーマップ:", editableKeyMaps);
    onClose(); // 適用後に閉じる
  };

  return (
    <div className="keymap-overlay">
      <div className="keymap-container">
        <h3>キーマップ設定</h3>

        {Object.entries(editableKeyMaps).map(([state, mappings]) => (
          <div key={state} className="keymap-section">
            <h4>{state}</h4>
            <table className="keymap-table">
              <thead>
                <tr>
                  <th>処理</th>
                  <th>メインキー</th>
                  <th>代替キー</th>
                </tr>
              </thead>
              <tbody>
                {mappings.map((map, index) => (
                  <tr key={index}>
                    <td>{map.action}</td>
                    <td>
                      <input
                        type="text"
                        value={map.mainKey}
                        onChange={(e) => handleKeyChange(state, index, 'mainKey', e.target.value)}
                        className="keymap-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={map.altKey}
                        onChange={(e) => handleKeyChange(state, index, 'altKey', e.target.value)}
                        className="keymap-input"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        <div className="keymap-actions">
          <button className="keymap-apply-button" onClick={handleApply}>適用</button>
          <button onClick={onClose} className="keymap-close-button">閉じる</button>
        </div>
      </div>
    </div>
  );
};

export default KeyMap;