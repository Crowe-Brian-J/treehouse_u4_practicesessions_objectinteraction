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
  }
}
