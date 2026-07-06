import { Book } from "./models/Book";
import { Member } from "./models/Member";

import { BookCategory } from "./enums/BookCategory";
import { MembershipType } from "./enums/MembershipType";

import { BookService } from "./services/BookService";
import { MemberService } from "./services/MemberService";
import { BorrowService } from "./services/BorrowService";

const bookService = new BookService();
const memberService = new MemberService();
const borrowService = new BorrowService(bookService, memberService);

// =====================================================
// Add Books
// =====================================================

bookService.addBook(
    new Book(
        1,
        "Clean Code",
        "Robert C. Martin",
        BookCategory.Programming,
        2008
    )
);

bookService.addBook(
    new Book(
        2,
        "Atomic Habits",
        "James Clear",
        BookCategory.Biography,
        2018
    )
);

console.log("\n========== ALL BOOKS ==========");
console.log(bookService.getAllBooks());

// =====================================================
// Get Book By ID
// =====================================================

console.log("\n========== GET BOOK BY ID ==========");
console.log(bookService.getBookById(1));

// =====================================================
// Update Book
// =====================================================

console.log("\n========== UPDATE BOOK ==========");

bookService.updateBook(1, {
    title: "Clean Code - Updated",
    publishedYear: 2024
});

console.log(bookService.getBookById(1));

// =====================================================
// Register Members
// =====================================================

memberService.registerMember(
    new Member(
        1,
        "Dax",
        "dax@gmail.com",
        MembershipType.Student
    )
);

memberService.registerMember(
    new Member(
        2,
        "Rahul",
        "rahul@gmail.com",
        MembershipType.Premium
    )
);

console.log("\n========== ALL MEMBERS ==========");
console.log(memberService.getAllMembers());

// =====================================================
// Get Member By ID
// =====================================================

console.log("\n========== GET MEMBER BY ID ==========");
console.log(memberService.getMemberById(1));

// =====================================================
// Borrow Book
// =====================================================

console.log("\n========== BORROW BOOK ==========");

borrowService.borrowBook(1, 1);

console.log(bookService.getBookById(1));

// =====================================================
// Borrow History
// =====================================================

console.log("\n========== BORROW HISTORY ==========");
console.log(borrowService.getBorrowHistory());

// =====================================================
// Return Book
// =====================================================

console.log("\n========== RETURN BOOK ==========");

borrowService.returnBook(1);

console.log(bookService.getBookById(1));

// =====================================================
// Borrow History After Return
// =====================================================

console.log("\n========== BORROW HISTORY AFTER RETURN ==========");
console.log(borrowService.getBorrowHistory());

// =====================================================
// Delete Book
// =====================================================

console.log("\n========== DELETE BOOK ==========");

bookService.removeBook(2);

console.log(bookService.getAllBooks());

// =====================================================
// Final Data
// =====================================================

console.log("\n========== FINAL BOOKS ==========");
console.log(bookService.getAllBooks());

console.log("\n========== FINAL MEMBERS ==========");
console.log(memberService.getAllMembers());