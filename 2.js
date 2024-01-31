// 3.
// Instruction:
// - Creating a library system using class Book and Library.
// Class Book:

// Constructor
// • Constructor(title, author, pages, genre): This initializes the properties 'title',
// 'author' , ' pages' and 'genre'.

class Book {
  constructor(title, author, pages, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
  }

  // Methods
  // • getSummary() - Returns a string summary of the book ex: .
  // "Title: Harry Wick, Author: Conan, Pages: 345, Genre: Sci-Fi"
  getSummary() {
    return `${this.title}` + ` ${this.author}` + ` ${this.Pages}` + ` ${this.Genre}`;

  }

}

// Properties
// • title: type string
// • author: type string
// • pages: type number
// • genre: type string





// Class Library:
// Constructor
// • Constructor(name): This initializes the properties 'name' and creates an
// empty array in the property books
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  // Methods
  // • addBook(newBook) - Accepts a Book object and adds it to the books array.
  // • getBooksByGenre(genre) - Returns an array of books that match the
  // specified genre.
  // • getTotalPagesByGenre(genre) - Returns the total number of pages for all
  // books of a specified genre.
  addBook(newBook) {
    this.books.push(newBook);
  }

  getBooksByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  }

  getTotalPagesByGenre(genre) {
    const genreBooks = this.getBooksByGenre(genre);
    return genreBooks.reduce((totalPages, book) => totalPages + book.pages, 0);
  }

}

// Properties
// • name: type string
// • books: type array of Book objects, initially empty.


// 4
// Instruction:
// - Create a 'Book' object and a 'Library' object for 'Practice 3'. Use a constructor and 
// methods in both classes.
// Initiate code:
// // Insert your code here

const library = new Library();

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 321, 'Fiction');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 180, 'Fiction');
const book3 = new Book('The Hobbit', 'J.R.R. Tolkien', 345, 'Fantasy',);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log(library.getBooksByGenre('Fiction'));
console.log(library.getTotalPagesByGenre('Fiction'));
