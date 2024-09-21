// src/App.js
import React from 'react';

import UserList from './components/UserList';  // Corrected path

import './App.css'; // Add styles here

function App() {
    return (
        <div className="App">
            <h1>User Management</h1>
            <UserList />
        </div>
    );
}

export default App;
