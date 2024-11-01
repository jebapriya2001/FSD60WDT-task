
# Library Management System Admin Dashboard

This is a Library Management System Admin Dashboard built with React, Material-UI, and Formik for managing book and author records. The application allows administrators to add, edit, and delete books and authors while ensuring that all forms are validated using Formik.

## Features

- Add, edit, and delete **Books** with fields: Title, Author, ISBN Number, and Publication Date.
- Add, edit, and delete **Authors** with fields: Name, Birth Date, and Biography.
- Form validation implemented with **Formik**.
- Responsive design using **Material-UI** Grid system and components.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Project Overview](#project-overview)
4. [Components and Services](#components-and-services)
5. [Contributing](#contributing)

---

## Installation

Follow these steps to install and run the application locally.

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn (package manager)

### Steps to Run

1. **Clone the Repository**:

    \`\`\`bash
    git clone https://github.com/your-username/library-management-dashboard.git
    \`\`\`

2. **Navigate into the project directory**:

    \`\`\`bash
    cd library-management-dashboard
    \`\`\`

3. **Install the dependencies**:

    Using npm:
    \`\`\`bash
    npm install
    \`\`\`

    Using yarn:
    \`\`\`bash
    yarn install
    \`\`\`

4. **Start the application**:

    Using npm:
    \`\`\`bash
    npm start
    \`\`\`

    Using yarn:
    \`\`\`bash
    yarn start
    \`\`\`

5. **Open the application**:

    Once the application starts, open your browser and go to:
    \`\`\`
    http://localhost:3000
    \`\`\`

---

## Usage

### Admin Dashboard Overview

The Library Management System Admin Dashboard consists of two primary sections:

1. **Books Management**:
   - You can add, edit, and delete books from the system.
   - Each book entry includes the title, author, ISBN number, and publication date.

2. **Authors Management**:
   - You can add, edit, and delete authors from the system.
   - Each author entry includes the author's name, birth date, and a short biography.

---

## Project Overview

The application is built using **React**, with **Formik** handling form validation and **Material-UI** providing a responsive design system. 

### Folder Structure

\`\`\`
.
├── public
├── src
│   ├── components
│   │   ├── BookForm.js
│   │   ├── AuthorForm.js
│   │   ├── BookList.js
│   │   ├── AuthorList.js
│   ├── pages
│   │   ├── Dashboard.js
│   │   ├── Books.js
│   │   ├── Authors.js
│   ├── services
│   │   ├── bookService.js
│   │   ├── authorService.js
│   ├── App.js
│   ├── index.js
└── README.md
\`\`\`

### Main Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Formik**: Library for handling form state and validation.
- **Material-UI**: React components for faster and easier web development with a focus on responsive design.
- **React Router**: For routing between different pages (Books, Authors, Dashboard).

---

## Components and Services

### Components

#### 1. \`BookForm.js\`
   - A form component for adding and editing book records. Uses **Formik** for form validation.
   
#### 2. \`AuthorForm.js\`
   - A form component for adding and editing author records. Uses **Formik** for form validation.

#### 3. \`BookList.js\`
   - Displays a list of books and provides options to edit or delete books.
   
#### 4. \`AuthorList.js\`
   - Displays a list of authors and provides options to edit or delete authors.

### Pages

#### 1. \`Dashboard.js\`
   - The main landing page of the admin panel. Provides navigation options to manage books and authors.

#### 2. \`Books.js\`
   - The page where book records can be added, edited, and deleted. Renders \`BookForm\` and \`BookList\` components.

#### 3. \`Authors.js\`
   - The page where author records can be added, edited, and deleted. Renders \`AuthorForm\` and \`AuthorList\` components.

### Services

#### 1. \`bookService.js\`
   - Provides methods for managing book records, including \`getBooks()\`, \`addBook()\`, \`updateBook()\`, and \`deleteBook()\`.

#### 2. \`authorService.js\`
   - Provides methods for managing author records, including \`getAuthors()\`, \`addAuthor()\`, \`updateAuthor()\`, and \`deleteAuthor()\`.

---

## Contributing

We welcome contributions to the Library Management System Admin Dashboard. Please follow the steps below to contribute:

### Steps to Contribute

1. **Fork the repository**:

   Click on the "Fork" button at the top right of this repository.

2. **Clone your fork**:

   \`\`\`bash
   git clone https://github.com/your-username/library-management-dashboard.git
   cd library-management-dashboard
   \`\`\`

3. **Create a new branch**:

   \`\`\`bash
   git checkout -b feature/your-feature-name
   \`\`\`

4. **Make your changes**:
   
   Implement your feature or bugfix.

5. **Commit your changes**:

   \`\`\`bash
   git add .
   git commit -m "Add your descriptive commit message here"
   \`\`\`

6. **Push to your branch**:

   \`\`\`bash
   git push origin feature/your-feature-name
   \`\`\`

7. **Create a Pull Request**:

   Go to the repository on GitHub and click "Compare & pull request." Provide a description of your changes.

### Guidelines for Contribution

- Ensure your code follows the existing code style.
- Write clear commit messages.
- Test your changes before submitting the pull request.
- Ensure that new features are appropriately documented.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Contact

If you have any questions or need further clarification, feel free to open an issue or reach out to the repository owner.
