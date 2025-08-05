# treehouse_u4_practicesessions_objectinteraction
I am maintaining this as a way to show my work through github as team treehouse uses an internal monitor for progress instead of commits.

## Treehouse README.md
Hello!

Your instructions are as follows:

### First Set of Video Instructions

1) In the Library.js file, declare a Library class. Do not yet add a constructor method.
2) In the Book.js file, declare a Book class. Do not yet add a constructor method.
3) In the Patron.js file, declare a Patron class. Do not yet add a constructor method.

### Second Set of Video Instructions

1) In the Library.js file, add a constructor method to the Library class. In the constructor method, initialize the following properties: books, patrons.

2) In the Book.js file, add a constructor method to the Book class. In the constructor method, initialize the following properties: title, author, isbn.

3) In the Patron.js file, add a constructor method to the Patron class. In the constructor method, initialize the following properties: name, email, currentBook.

Don't forget to add parameters for any values that need to be passed in to each of the constructor methods.

### Third Set of Video Instructions

1) In the Library.js file, add two methods to the Library class: addPatron() and addBook()

- addPatron() receives one parameter, a patron object. This object (stored in the `patron` variable) should be added to the Library object's (stored in the`library` variable) `patrons` property, which is an array.

- addBook() receives one parameter, a book object. This object (stored in the `book` variable) should be added to the Library object's `books` property, which is an array.

### Fourth Set of Video Instructions

1) Inside the Book class, add three properties to the constructor method: out, dueDate, and patron.

- The out property should be initialized to false

- The dueDate property should be initialized to null

- The patron property should be initialized to null

### Fifth Set of Video Instructions

1) Inside the Patron class, add two methods: checkOut() and returnBook()

- The checkOut() method should receive one argument, a Book object.
- It should update the currentBook property to the Book object that's passed in.
- It should update that Book object's out property to true.
- It should update that Book object's patron property to the Patron object itself
- It should calculate the due date (14 days in the future) and then set the Book object's dueDate property to that due date.

- The returnBook() method should receive one argument, a Book object.
- It should update the currentBook property to null
- It should update that Book object's out property to false
- It should update that Book object's patron property to null
- It should update that Book object's dueDate property to null

### Sixth Set of Video Instructions

1) Change the out property initialization in the Book class constructor method to _out.

2) Add a setter method called out() to the Book class. It should receive one argument, a boolean value.

- Inside the setter method, set the value of the _out backing property to the parameter.

- Then, inside the setter method, check the value of the _out backing property. If it's true, calculate the due date and set the Book object's dueDate property. If it's false, set the dueDate property to null.

3) Add a getter method to the Book class called out(). It should return the value of the _out backing property.

4) Back in the Patron class, refactor your checkOut() method to use the new out() setter method instead of your existing code.