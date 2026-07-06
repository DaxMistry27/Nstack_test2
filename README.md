# 📚 Library Management System

A console-based **Library Management System** built using **TypeScript**. This project demonstrates TypeScript fundamentals, object-oriented programming principles, generics, interfaces, enums, utility types, and clean project architecture without using a database.

---

## Features

### Book Management
- Add a new book
- Get all books
- Get a book by ID
- Update book details
- Remove a book

### Member Management
- Register a new member
- Get all members
- Get a member by ID

### Borrow Management
- Borrow a book
- Return a book
- Prevent borrowing unavailable books
- Maintain borrowing history

---

## Technologies Used

- TypeScript
- Node.js
- ESLint

---

## Project Structure

```
library-management/
│
├── src/
│   ├── enums/
│   ├── interfaces/
│   ├── models/
│   ├── repositories/
│   ├── services/
│   └── index.ts
│
├── dist/
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── README.md
```

---

## TypeScript Concepts Covered

- Primitive Types
- Interfaces
- Type Aliases
- Enums
- Classes
- Constructors
- Access Modifiers
- Generic Classes
- Generic Interfaces
- Generic Constraints
- Utility Types
  - Partial
  - Omit
- Readonly Properties
- Optional Properties
- Type Inference
- Strong Typing
- Object-Oriented Programming
- Repository Pattern
- Error Handling

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Move to the project directory

```bash
cd library-management
```

Install dependencies

```bash
npm install
```

---

## Build the Project

```bash
npm run build
```

---

## Run the Project

```bash
npm run dev
```

or

```bash
npm start
```

---

## Lint the Project

Check for lint issues

```bash
npm run lint
```

Automatically fix lint issues

```bash
npm run lint:fix
```

---

## Data Storage

This project does **not** use a database.

All data is stored in memory using a generic repository and arrays during application execution.

---

## Project Architecture

```
index.ts
      │
      ▼
 Services
      │
      ▼
 Generic Repository
      │
      ▼
 In-Memory Arrays
```

---

## Sample Functionalities

- Add Books
- Register Members
- Borrow Books
- Return Books
- View Borrow History
- Update Book Details
- Delete Books
- Search Books by ID
- Search Members by ID

---

## Author

**Dax Mistry**