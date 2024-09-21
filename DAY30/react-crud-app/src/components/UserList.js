// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function UserList() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    // Fetch Users
    useEffect(() => {
        axios.get(API_URL)
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    // Add or Update User
    const handleSaveUser = (user) => {
        if (user.id) {
            // Update existing user
            axios.put(`${API_URL}/${user.id}`, user)
                .then(response => {
                    setUsers(users.map(u => (u.id === user.id ? response.data : u)));
                    setSelectedUser(null);
                })
                .catch(error => console.error('Error updating user:', error));
        } else {
            // Add new user
            axios.post(API_URL, user)
                .then(response => setUsers([...users, response.data]))
                .catch(error => console.error('Error adding user:', error));
        }
    };

    // Delete User
    const handleDeleteUser = (id) => {
        axios.delete(`${API_URL}/${id}`)
            .then(() => setUsers(users.filter(user => user.id !== id)))
            .catch(error => console.error('Error deleting user:', error));
    };

    // Edit User
    const handleEditUser = (user) => {
        setSelectedUser(user);
    };

    return (
        <div>
            <UserForm onSaveUser={handleSaveUser} selectedUser={selectedUser} />
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                        <button onClick={() => handleEditUser(user)}>Edit</button>
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
