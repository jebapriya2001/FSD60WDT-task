let authors = [];

// Fetch all authors
export const getAuthors = () => authors;

// Add a new author
export const addAuthor = (author) => {
  author.id = authors.length + 1; // Generate an ID
  authors.push(author);
};

// Update an existing author
export const updateAuthor = (author) => {
  authors = authors.map((a) => (a.id === author.id ? author : a));
};

// Delete an author by ID
export const deleteAuthor = (id) => {
  authors = authors.filter((a) => a.id !== id);
};
