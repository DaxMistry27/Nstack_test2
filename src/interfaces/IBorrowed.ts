import { ID } from "../types/common";

export interface IBorrowed {
    borrowBook(bookId: ID, memberId: ID): void;
    returnBook(bookId: ID): void;
}