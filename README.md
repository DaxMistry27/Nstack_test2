# Library Management System

A console-based Library Management System built with TypeScript. The project demonstrates TypeScript fundamentals, object-oriented programming, generics, interfaces, enums, utility types, and a clean in-memory architecture without using a database.

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

## Technologies Used

- TypeScript
- Node.js
- ESLint

## Project Structure

```text
Test2/
|-- src/
|   |-- enums/
|   |-- interfaces/
|   |-- models/
|   |-- repositories/
|   |-- services/
|   |-- types/
|   `-- index.ts
|-- dist/
|-- package.json
|-- package-lock.json
|-- tsconfig.json
|-- eslint.config.mjs
`-- README.md
```

## TypeScript Concepts Covered

- Primitive types
- Type aliases
- Interfaces
- Enums
- Classes and constructors
- Access modifiers
- Generic classes
- Generic interfaces
- Generic constraints
- Utility types such as `Partial` and `Omit`
- Readonly and optional properties
- Type inference
- Strong typing
- Object-oriented programming
- Repository pattern
- Error handling

## Installation

Install dependencies:

```bash
npm install
```

## Build the Project

```bash
npm run build
```

## Run the Project

Compile and run in one command:

```bash
npm run dev
```

Or run the compiled JavaScript after building:

```bash
npm start
```

## Lint the Project

Check for lint issues:

```bash
npm run lint
```

Automatically fix lint issues:

```bash
npm run lint:fix
```

## Data Storage

This project does not use a database. All data is stored in memory using a generic repository and arrays during application execution.

## Project Architecture

```text
index.ts
   |
   v
Services
   |
   v
Generic Repository
   |
   v
In-Memory Arrays
```

## Sample Functionalities

- Add books
- Register members
- Borrow books
- Return books
- View borrow history
- Update book details
- Delete books
- Search books by ID
- Search members by ID

## Author

**Dax Mistry**
