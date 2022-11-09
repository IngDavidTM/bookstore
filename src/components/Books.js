import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import '../stylesheets/Books.css';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="books">
      <div className="container">
        {books.map((book) => (
          <Book key={book.id} id={book.id} name={book.title} author={book.author} />
        ))}
      </div>
      <div className="form">
        <AddBook />
      </div>
    </div>
  );
};

export default Books;
