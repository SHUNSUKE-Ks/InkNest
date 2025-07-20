import React, { useState, useEffect, useCallback } from 'react';
import ChatManager from './components/ChatManager';
import KeyMap from './MenuDB/08_Setting/KeyMap';
import AlertModal from './MenuDB/08_Setting/AlertModal';
import { StateProvider, useStateContext } from './context/StateContext';
import { initialKeyMaps } from './MenuDB/08_Setting/KeyMap';
import './styles/App.css';

const AppContent = () => {
  const { appState, setAppState } = useStateContext();
  const [showKeyMap, setShowKeyMap] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertInfo, setAlertInfo] = useState({ title: '', message: '' });
  const [message, setMessage] = useState(''); // メッセージ入力状態
  const [shouldFocusInput, setShouldFocusInput] = useState(false);

  // --- アクション関数の定義 ---
  const openSettings = useCallback(() => setShowKeyMap(true), []);
  const closeSettings = useCallback(() => setShowKeyMap(false), []);

  const postMessage = useCallback(() => {
    // 本来はここでchatServiceなどを呼び出す
    console.log('Message posted:', message);
    setMessage('');
  }, [message]);

  const addNewline = useCallback(() => {
    // 実際の改行処理はMessageInput側で行うため、ここではロジック不要
    console.log('Newline action triggered');
  }, []);

  const focusInput = useCallback(() => {
    setShouldFocusInput(true);
    // フォーカスが当たった後、このフラグはリセットする必要がある
    setTimeout(() => setShouldFocusInput(false), 0);
  }, []);

  // --- アクションマップの定義 ---
  const actionMap = {
    '設定画面': openSettings,
    '投稿': postMessage,
    '改行': addNewline,
    'テキスト入力中にステートを移行': focusInput,
  };

  const executeAction = useCallback((actionName) => {
    const action = actionMap[actionName];
    if (action) {
      action();
    } else {
      setAlertInfo({ title: '未定義のアクション', message: `アクション「${actionName}」は定義されていません。` });
      setShowAlert(true);
    }
  }, [actionMap]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const savedKeyMaps = localStorage.getItem('userKeyMaps');
      const keyMaps = savedKeyMaps ? JSON.parse(savedKeyMaps) : initialKeyMaps;
      const currentMappings = keyMaps[appState] || [];

      for (const mapping of currentMappings) {
        const mainKeyParts = mapping.mainKey.split('+');
        const isCtrl = mainKeyParts.includes('Ctrl');
        const keyName = mainKeyParts[mainKeyParts.length - 1];

        // event.keyではなくevent.codeで比較する
        if (event.code === keyName && event.ctrlKey === isCtrl) {
          event.preventDefault();
          executeAction(mapping.action);
          return;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [appState, executeAction]);

  return (
    <div className="app-container">
      <div className="chat-manager">
        <ChatManager 
          currentUser={{ uid: "test-user-id", email: "test@example.com" }} 
          onSendMessage={postMessage} // 投稿関数を渡す
          shouldFocusInput={shouldFocusInput} // フォーカス状態を渡す
        />
      </div>
      {showKeyMap && <KeyMap onClose={closeSettings} />}
      <AlertModal 
        show={showAlert} 
        onClose={() => setShowAlert(false)} 
        title={alertInfo.title} 
        message={alertInfo.message} 
      />
    </div>
  );
}

function App() {
  return (
    <StateProvider>
      <AppContent />
    </StateProvider>
  );
}

export default App;
