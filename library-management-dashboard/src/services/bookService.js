let books = [];

export const getBooks = () => books;

export const addBook = (book) => {
  book.id = books.length + 1;
  books.push(book);
};

export const updateBook = (book) => {
  books = books.map((b) => (b.id === book.id ? book : b));
};

export const deleteBook = (id) => {
  books = books.filter((b) => b.id !== id);
};
