import React, { useState, useEffect } from 'react';
import ChatSelectScreen from './ChatSelect/ChatSelectScreen';
import ChatScreen from './Chat/ChatScreen';
import { getRooms, createRoom } from '../services/chatService';
import { logout } from '../services/authService';
import { getUsers } from '../services/userService';

const ChatManager = ({ currentUser }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribeRooms = getRooms((fetchedRooms) => {
      setRooms(fetchedRooms);
    });
    const unsubscribeUsers = getUsers((fetchedUsers) => {
      setUsers(fetchedUsers);
    });
    return () => {
      unsubscribeRooms();
      unsubscribeUsers();
    };
  }, []);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  const handleBackToSelect = () => {
    setSelectedRoom(null);
  };

  const handleAddRoom = async (roomName) => {
    await createRoom(roomName);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      {selectedRoom ? (
        <ChatScreen room={selectedRoom} onBack={handleBackToSelect} currentUser={currentUser} users={users} />
      ) : (
        <ChatSelectScreen onRoomSelect={handleRoomSelect} rooms={rooms} onAddRoom={handleAddRoom} users={users} />
      )}
    </>
  );
};

export default ChatManager;
