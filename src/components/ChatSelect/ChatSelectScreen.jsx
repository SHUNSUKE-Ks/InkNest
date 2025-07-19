import React, { useState, useEffect } from 'react';
import RoomList from './RoomList';
import CreateRoomButton from './CreateRoomButton';
import AddUserForm from '../UserManagement/AddUserForm';
import UserList from '../UserManagement/UserList';
import { getUsers } from '../../services/userService';
import '../../styles/ChatSelectScreen.css';

const ChatSelectScreen = ({ onRoomSelect, rooms, onAddRoom, onLogout }) => {
  const [showCreateRoom, setShowCreateRoom] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');
  const [showUserManagement, setShowUserManagement] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = getUsers((fetchedUsers) => {
      setUsers(fetchedUsers);
    });
    return () => unsubscribe();
  }, []);

  const handleCreateRoomClick = () => {
    setShowCreateRoom(true);
    setShowUserManagement(false); // 他のフォームを閉じる
  };

  const handleAddRoomSubmit = (e) => {
    e.preventDefault();
    if (newRoomName.trim()) {
      onAddRoom(newRoomName);
      setNewRoomName('');
      setShowCreateRoom(false);
    }
  };

  const handleShowUserManagement = () => {
    setShowUserManagement(true);
    setShowCreateRoom(false); // 他のフォームを閉じる
  };

  return (
    <div className="chat-select-screen">
      <header className="chat-select-header">
        <h2>Chats</h2>
        <div>
          <button onClick={handleShowUserManagement} className="manage-users-button">Manage Users</button>
          
        </div>
      </header>
      <RoomList rooms={rooms} onRoomSelect={onRoomSelect} />
      {!showCreateRoom && !showUserManagement && (
        <CreateRoomButton onClick={handleCreateRoomClick} />
      )}

      {showCreateRoom && (
        <form onSubmit={handleAddRoomSubmit} className="create-room-form">
          <input
            type="text"
            value={newRoomName}
            onChange={(e) => setNewRoomName(e.target.value)}
            placeholder="Enter room name"
            className="create-room-input"
          />
          <button type="submit" className="create-room-submit-button">Add Room</button>
          <button type="button" onClick={() => setShowCreateRoom(false)} className="create-room-cancel-button">Cancel</button>
        </form>
      )}

      {showUserManagement && (
        <div className="user-management-section">
          <AddUserForm onUserAdded={() => setShowUserManagement(false)} onCancel={() => setShowUserManagement(false)} />
          <UserList users={users} />
        </div>
      )}
    </div>
  );
};

export default ChatSelectScreen;
