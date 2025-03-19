import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FriendList = () => {
  const [friends, setFriends] = useState([
    { id: uuidv4(), name: 'Bùi Khánh Uyên' },
    { id: uuidv4(), name: 'Phạm Đăng Khôi' }
  ]);
  const [newFriend, setNewFriend] = useState('');

  // Track the name changes for each friend
  const [editNames, setEditNames] = useState({});

  const addOneFriend = () => {
    if (newFriend) {
      if (friends.some(f => f.name.toLowerCase() === newFriend.toLowerCase())) {
        const confirmAdd = window.confirm('The name you added is existed! Becareful. Do you want to continue the process?');
        if (confirmAdd) {
          setFriends([...friends, { id: uuidv4(), name: newFriend }]);
          setNewFriend('');
        } else {
          setNewFriend('');
        }
      } else {
        setFriends([...friends, { id: uuidv4(), name: newFriend }]);
        setNewFriend('');
      }
    }
  };

  const deleteFriend = (id) => {
    const confirmDelete = window.confirm('Are you sure to delete?');
    if (confirmDelete) {
      setFriends(friends.filter(f => f.id !== id));
    }
  };

  const updateFriend = (id) => {
    const confirmUpdate = window.confirm('Are you sure to update?');
    if (confirmUpdate) {
      const updatedFriends = friends.map((f) => {
        if (f.id === id) {
          return { ...f, name: editNames[id] || f.name }; // Update name only if there's an edited name
        }
        return f;
      });
      setFriends(updatedFriends);
      // Reset the edited name for the friend after update
      setEditNames((prev) => {
        const updated = { ...prev };
        delete updated[id]; // Remove the edited name state for the updated friend
        return updated;
      });
    }
  };

  const handleInputChange = (e) => setNewFriend(e.target.value);

  const handleEditNameChange = (id, e) => {
    setEditNames((prev) => ({
      ...prev,
      [id]: e.target.value, // Store the new name for the friend with this ID
    }));
  };

  const cancelEdit = (id) => {
    // Reset the editNames state for this friend if user cancels
    setEditNames((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  return (
    <div>
      <h2>Friends List:</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th style={{ width: 150, textAlign: 'center' }}>Name</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {friends.map((f) => (
            <tr key={f.id}>
              <td>{f.id}</td>
              <td>
                {editNames[f.id] !== undefined ? (
                  <div>
                    <input
                      type="text"
                      value={editNames[f.id]}
                      onChange={(e) => handleEditNameChange(f.id, e)}
                      placeholder="Enter new name"
                    />
                    <button onClick={() => updateFriend(f.id)}>Update</button>
                    <button onClick={() => cancelEdit(f.id)}>Cancel</button>
                  </div>
                ) : (
                  f.name
                )}
              </td>
              <td>
                <button onClick={() => deleteFriend(f.id)}>Delete</button>
              </td>
              <td>
                {editNames[f.id] === undefined && (
                  <button onClick={() => handleEditNameChange(f.id, { target: { value: f.name } })}>
                    Update
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <input
        type="text"
        value={newFriend}
        onChange={handleInputChange}
        placeholder="Enter new friend's name"
      />
      <button onClick={addOneFriend}>Add</button>
    </div>
  );
};

export default FriendList;
