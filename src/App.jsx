import React, { useState, useEffect } from 'react';
import ChatManager from './components/ChatManager';
import LoginScreen from './components/Auth/LoginScreen';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './styles/App.css';

function App() {
  const [user, setUser] = useState({
    uid: "test-user-id",
    email: "test@example.com",
  }); // ダミーユーザーで初期化
  const [loading, setLoading] = useState(false); // ロードをスキップ

  // 認証状態の監視は一時的にコメントアウト
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setLoading(false);
  //   });
  //   return () => unsubscribe();
  // }, []);

  if (loading) {
    return <div className="app-container">Loading...</div>;
  }

  return (
    <div className="app-container">
      <div className="chat-manager">
        <ChatManager currentUser={user} />
      </div>
    </div>
  );
}

export default App;