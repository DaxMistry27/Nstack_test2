import { BorrowRecord } from "../models/BorrowRecord";
import { GenericRepository } from "../repositories/GenericRepository";
import { BookService } from "./BookService";
import { MemberService } from "./MemberService";
import { IBorrowed } from "../interfaces/IBorrowed";
import { ID } from "../types/common";

export class BorrowService implements IBorrowed {

    private repository = new GenericRepository<BorrowRecord>();

    constructor(
        private bookService: BookService,
        private memberService: MemberService
    ) { }

    borrowBook(bookId: ID, memberId: ID): void {

        const book = this.bookService.getBookById(bookId);

        if (!book) {
            throw new Error("Book not found");
        }

        if (!book.isAvailable) {
            throw new Error("Book is already borrowed");
        }

        const member = this.memberService.getMemberById(memberId);

        if (!member) {
            throw new Error("Member not found");
        }

        this.bookService.markAsBorrowed(bookId);

        this.repository.add(
            new BorrowRecord(
                Date.now(),
                bookId,
                memberId,
                new Date()
            )
        );
    }

    returnBook(bookId: ID): void {

        const records = this.repository.getAll();

        const record = records.find(
            r => r.bookId === bookId && !r.returnDate
        );

        if (!record) {
            throw new Error("Borrow record not found");
        }

        record.returnDate = new Date();

        this.bookService.markAsReturned(bookId);
    }

    getBorrowHistory(): BorrowRecord[] {
        return this.repository.getAll();
    }
}