import React from 'react';
import RoomItem from './RoomItem';
import '../../styles/RoomList.css';

const RoomList = ({ rooms, onRoomSelect }) => {
  return (
    <div className="room-list">
      {rooms.map(room => (
        <RoomItem key={room.id} room={room} onRoomSelect={onRoomSelect} />
      ))}
    </div>
  );
};

export default RoomList;
