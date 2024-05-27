import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/users', { name, family, data });
      alert('User created successfully');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user');
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Family" value={family} onChange={e => setFamily(e.target.value)} />
        <input type="text" placeholder="Data" value={data} onChange={e => setData(e.target.value)} />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UserForm;
