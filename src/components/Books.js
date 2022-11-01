import Book from './Book';
import '../stylesheets/Books.css';

const Books = () => (
  <div className="container">
    <Book name="Cow" author="Paco" />
    <Book name="Cow2" author="Paco" />
    <Book name="Power" author="Samari" />
  </div>
);

export default Books;
