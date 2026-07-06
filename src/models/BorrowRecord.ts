import { ID } from "../types/common";

export class BorrowRecord {
    constructor(
        public readonly id: ID,
        public readonly bookId: ID,
        public readonly memberId: ID,
        public borrowDate: Date,
        public returnDate?: Date
    ) { }
}