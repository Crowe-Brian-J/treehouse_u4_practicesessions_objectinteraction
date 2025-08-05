/*
Plan of attack for Library Application

Library Class
-Properties
--books
--patrons

-Methods
--addBook()
--addPatron()

*/
class Library {
  //constructor method
  constructor() {
    this.books = []
    this.patrons = []
  }

  //addPatron method
  addPatron(patron) {
    this.patrons.push(patron)
  }

  //addBook method
  addBook(book) {
    this.books.push(book)
  }
}
