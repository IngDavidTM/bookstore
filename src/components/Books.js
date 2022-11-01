import Book from './Book';
import AddBook from './AddBook';
import '../stylesheets/Books.css';

const Books = () => (
  <div className="books">
    <div className="container">
      <Book name="Cow" author="Paco" />
      <Book name="Cow2" author="Paco" />
      <Book name="Power" author="Samari" />
    </div>
    <div className="form">
      <AddBook />
    </div>
  </div>
);

export default Books;
