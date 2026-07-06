import { Book, BookUpdate } from "../models/Book";
import { GenericRepository } from "../repositories/GenericRepository";
import { ID } from "../types/common";

export class BookService {
    private repository = new GenericRepository<Book>();

    addBook(book: Book): void {
        this.repository.add(book);
    }

    getAllBooks(): Book[] {
        return this.repository.getAll();
    }

    getBookById(id: ID): Book | undefined {
        return this.repository.getById(id);
    }

    updateBook(id: ID, data:  BookUpdate): void {
        this.repository.update(id, data);
    }

    removeBook(id: ID): void {
        this.repository.remove(id);
    }

    markAsBorrowed(id: ID): void {
        const book = this.getBookById(id);

        if (!book) {
            throw new Error("Book not found");
        }

        book.isAvailable = false;
    }

    markAsReturned(id: ID): void {
        const book = this.getBookById(id);

        if (!book) {
            throw new Error("Book not found");
        }

        book.isAvailable = true;
    }
}