/*
Plan of attack for Library Application

Book Class
-Properties
--title
--author
--ISBN
*/

class Book {
  //constructor method
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
    //change per instructions
    this._out = false
    this.dueDate = null
    this.patron = null
  }

  //add getter method to the book class called out()
  get out() {
    //return this._out
    return this._out
  }

  //add setter method called out(), receive one boolean argument
  set out(bool) {
    //set the value of this._out to bool
    this._out = bool
    //if this._out is true
    if (this._out) {
      //calculate dueDate
      const dueDate = new Date()
      //set dueDate to 14 days in the future
      dueDate.setDate(dueDate.getDate() + 14)
      //assign to dueDate
      this.dueDate = dueDate
    } else {
      //if false set dueDate to null
      this.dueDate = null
    }
  }
}
