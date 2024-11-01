import React, { useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import { getAuthors, addAuthor, updateAuthor, deleteAuthor } from '../services/authorService';
import { Typography, Grid, Button } from '@mui/material';

const Authors = () => {
  // State to manage list of authors and the current author being edited
  const [authors, setAuthors] = useState(getAuthors());
  const [currentAuthor, setCurrentAuthor] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Flag to determine if we're in edit mode

  // Handle form submission for adding or updating an author
  const handleSubmit = (author) => {
    if (isEditing) {
      updateAuthor(author); // Update the author if in edit mode
    } else {
      addAuthor(author); // Add a new author
    }
    setAuthors(getAuthors()); // Refresh the list of authors
    resetForm(); // Reset the form state
  };

  // Handle edit button click
  const handleEdit = (author) => {
    setCurrentAuthor(author); // Set the current author to be edited
    setIsEditing(true); // Switch to edit mode
  };

  // Handle delete button click
  const handleDelete = (id) => {
    deleteAuthor(id); // Delete the author
    setAuthors(getAuthors()); // Refresh the list of authors
  };

  // Reset form state after submission or cancel
  const resetForm = () => {
    setCurrentAuthor(null); // Clear the current author
    setIsEditing(false); // Exit edit mode
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Manage Authors
      </Typography>

      {/* Author Form */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <AuthorForm
            initialValues={currentAuthor || { name: '', birthDate: '', biography: '' }}
            onSubmit={handleSubmit}
          />
          {isEditing && (
            <Button variant="contained" color="secondary" onClick={resetForm} style={{ marginTop: '10px' }}>
              Cancel Edit
            </Button>
          )}
        </Grid>

        {/* Author List */}
        <Grid item xs={12} md={6}>
          <AuthorList authors={authors} onEdit={handleEdit} onDelete={handleDelete} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Authors;
