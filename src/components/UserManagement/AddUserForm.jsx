import React, { useState } from 'react';
import { addUser } from '../../services/userService';
import '../../styles/UserManagement.css';

const AddUserForm = ({ onUserAdded, onCancel }) => {
  const [name, setName] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await addUser(name, avatarFile);
      setName('');
      setAvatarFile(null);
      onUserAdded();
    } catch (err) {
      setError(err.message);
      console.error("Error adding user:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-user-form">
      <h3>Add New User</h3>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder="User Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setAvatarFile(e.target.files[0])}
      />
      <div className="form-actions">
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add User'}
        </button>
        <button type="button" onClick={onCancel} disabled={loading}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
