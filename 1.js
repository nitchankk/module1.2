// 1.
// Instruction:
// - Write class Book. Then, add a method to the object that outputs information about the
// book.


// Class Book
// Constructor
// • Constructor(title, author, yearPublished): This initializes the properties
// 'title', 'author', and 'yearPublished'. If they are empty, it assigns 'no title', 'no
// author', and 0 respectively.

class Book {

  constructor(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;

    if (!title || typeof title != 'string') {
      this.title = 'no title';
    }

    if (!author || typeof author != 'string') {
      this.author = 'no author';
    }

    if (!yearPublished || typeof yearPublished != 'number') {
      this.yearPublished = 0;
    }

  }


  // Methods
  // • getInfo(): This method return a string that combines the book's title, author,
  // and year of publication.

  getInfo() {
    return `${this.title}` + ` ${this.author}` + ` ${this.yearPublished}`;
  }


}

// Initiate code:
// // Creating class Book
// // Insert your code here

// Properties
// • title: type String
// • author: type String
// • yearPublished: type number



// 2
// Instruction:
// - Create an object Book reference ‘practice 1’. Use a constructor Constructor(title, 
// author, yearPublished. Additionally, use a 'getInfo()' method.
// Initiate code:
// // Insert your code here

const myBook = new Book(1, '', 'jkmfchgk');
console.log(myBook.getInfo());

