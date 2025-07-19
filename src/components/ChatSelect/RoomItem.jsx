import React from 'react';
import '../../styles/RoomItem.css';

const RoomItem = ({ room, onRoomSelect }) => {
  return (
    <div className="room-item" onClick={() => onRoomSelect(room)}>
      <h3>{room.name}</h3>
      <p>Last message: {new Date(room.lastMessage).toLocaleTimeString()}</p>
    </div>
  );
};

export default RoomItem;
