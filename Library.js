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
    //add daily fine rate
    this.dailyFine = 0.1
  }

  //addPatron method
  addPatron(patron) {
    this.patrons.push(patron)
  }

  //addBook method
  addBook(book) {
    this.books.push(book)
  }

  //changing my code to include filtering as assignment showed - decreases the number in array of patrons
  /*   chargeFines() {
    //loop over patrons to check for checkedOut, smaller array than all books
    this.patrons.forEach((patron) => {
      //find the checkedOut book
      const book = patron.currentBook
      //check if there is a book, make sure it's out and has a dueDate
      if (book && book._out && book.dueDate) {
        const currentDate = new Date()
        if (currentDate > book.dueDate) {
          //calculate how many days over due (ms)
          const timeDiff = today - book.dueDate
          //calculate ms in a day -> ms in a second * 60 seconds in a minute * 60 minutes in an hour * 24 hours in a day
          const oneDay = 1000 * 60 * 60 * 24
          //divide time difference by one day to get total days
          const daysOverdue = Math.floor(timeDiff / oneDay)
          //calculate fine
          const totalFine = daysOverdue * this.dailyFine
          //set patron balance to totalFine each time instead of adding by the day to prevent compounding
          patron.balance = totalFine
          }
          }
          })
          } */

  //add chargeFines method that finds all Patrons with overdue books and charges them the daily fine every day their book is late
  chargeFines() {
    //find today
    const currentDate = new Date()
    //ms in a day
    const oneDay = 1000 * 60 * 60 * 24
    //due date
    //use filter to check patrons for overdue books
    const latePatrons = this.patrons.filter(
      (patron) =>
        patron.currentBook !== null && patron.currentBook.dueDate < currentDate
    )

    latePatrons.forEach((patron) => {
      const dueDate = patron.currentBook
      const daysOverdue = Math.floor(
        (currentDate.getTime() - dueDate.getTime()) / oneDay
      )
      patron.balance = this.dailyFine * daysOverdue
    })
  }
}
