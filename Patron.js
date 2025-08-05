/*
Plan of attack for Library Application

Patron Class
-Properties
--name
--email
--currentBook

-Methods
--checkOut()
--returnBook()
*/

class Patron {
  //constructor method
  constructor(name, email) {
    this.name = name
    this.email = email
    this.currentBook = null
    //add balance to patron constructor in case of fines
    this.balance = 0
  }

  //checkOut method
  checkOut(book) {
    //update patron's current book
    this.currentBook = book
    //update book object's patron to be the Patron object itself
    book.patron = this
    //refactor checkOut method to use new out setter method instead
    book.out = true
  }

  //returnBook method
  returnBook(book) {
    //update patron's current book to null
    this.currentBook = null
    //update book's out property to false
    book.out = false
    //update book's patron property to null
    book.patron = null
  }
}
