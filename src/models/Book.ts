import { BookCategory } from "../enums/BookCategory";
import { ID } from "../types/common";

export class Book {
    constructor(
        public readonly id: ID,
        public title: string,
        public author: string,
        public category: BookCategory,
        public publishedYear: number,
        public isAvailable: boolean = true
    ) {}
}

// Utility Types

// Used while updating a book (id cannot be updated)
export type BookUpdate = Partial<Omit<Book, "id">>;
