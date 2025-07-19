import React from 'react';
import { deleteUser } from '../../services/userService';
import '../../styles/UserManagement.css';

const UserList = ({ users }) => {
  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId);
        alert('User deleted successfully!');
      } catch (error) {
        console.error("Error deleting user:", error);
        alert('Failed to delete user.');
      }
    }
  };

  return (
    <div className="user-list-container">
      <h3>Manage Users</h3>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <img src={user.avatar || 'https://via.placeholder.com/40'} alt={user.name} className="user-avatar" />
              <span>{user.name}</span>
              <button onClick={() => handleDelete(user.id)} className="delete-button">
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
