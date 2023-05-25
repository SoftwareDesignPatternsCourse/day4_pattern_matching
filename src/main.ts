enum BookType {
  PAPER = 'PAPER',
  ELECTRONIC_TYPE = 'ELECTRONIC_TYPE',
  NEWSLETTER = 'NEWSLETTER'
}



class Book {
  amount:number;
  type:BookType;

  constructor(amount:number, type:BookType) {
    this.amount = amount;
    this.type = type;
  }
}


const getData = ():Book[] => {
  const books:Book[] = [];
  books.push(new Book(10, BookType.ELECTRONIC_TYPE))
  books.push(new Book(20, BookType.ELECTRONIC_TYPE))
  books.push(new Book(30, BookType.ELECTRONIC_TYPE))
  books.push(new Book(40, BookType.ELECTRONIC_TYPE))
  books.push(new Book(10, BookType.PAPER))
  books.push(new Book(10, BookType.PAPER))
  books.push(new Book(10, BookType.PAPER))
  books.push(new Book(10, BookType.PAPER))
  books.push(new Book(10, BookType.NEWSLETTER))
  books.push(new Book(20, BookType.NEWSLETTER))
  books.push(new Book(30, BookType.NEWSLETTER))
  return books;
}


const main = () => {


  console.log("the book store");


}