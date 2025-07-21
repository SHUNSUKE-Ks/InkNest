import React from 'react';
import '../../styles/ExpressionSelector.css'; // スタイルシートをインポート

const ExpressionSelector = ({ expressions, onSelectExpression, onClose }) => {
  return (
    <div className="expression-selector-overlay" onClick={onClose}>
      <div className="expression-selector-content" onClick={(e) => e.stopPropagation()}> {/* クリックイベントの伝播を停止 */}
        {expressions.map((expression, index) => (
          <div
            key={index}
            className="expression-item"
            onClick={() => {
              onSelectExpression(expression.name);
              onClose();
            }}
          >
            <img src={expression.url} alt={expression.name} className="expression-avatar" />
            <span className="expression-name">{expression.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpressionSelector;
