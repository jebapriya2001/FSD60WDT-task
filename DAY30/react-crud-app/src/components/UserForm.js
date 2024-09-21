// src/UserForm.js
import React, { useState, useEffect } from 'react';

function UserForm({ onSaveUser, selectedUser }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Fill form when editing
    useEffect(() => {
        if (selectedUser) {
            setName(selectedUser.name);
            setEmail(selectedUser.email);
        } else {
            setName('');
            setEmail('');
        }
    }, [selectedUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveUser({ id: selectedUser?.id, name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">{selectedUser ? 'Update' : 'Add'} User</button>
        </form>
    );
}

export default UserForm;
