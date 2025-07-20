import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [appState, setAppState] = useState('デフォルト'); // 初期状態は'デフォルト'

  return (
    <StateContext.Provider value={{ appState, setAppState }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
