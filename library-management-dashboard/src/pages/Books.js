import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import { getBooks, addBook, updateBook, deleteBook } from '../services/bookService';

const Books = () => {
  const [books, setBooks] = useState(getBooks());
  const [currentBook, setCurrentBook] = useState(null);

  const handleSubmit = (book) => {
    if (currentBook) {
      updateBook(book);
    } else {
      addBook(book);
    }
    setBooks(getBooks());
    setCurrentBook(null);
  };

  const handleEdit = (book) => {
    setCurrentBook(book);
  };

  const handleDelete = (id) => {
    deleteBook(id);
    setBooks(getBooks());
  };

  return (
    <div>
      <BookForm initialValues={currentBook || { title: '', author: '', isbn: '', publicationDate: '' }} onSubmit={handleSubmit} />
      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Books;
