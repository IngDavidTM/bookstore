import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addAction } from '../redux/books/books';
import '../stylesheets/AddBook.css';

const AddBook = () => {
  const categoryOptions = ['Science Fiction', 'Adventure', 'Horror', 'Historical', 'Love', 'Humour'];
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('gdgf');
  const dispatch = useDispatch();
  const addBook = (e) => {
    e.preventDefault();
    if (name !== '' && author !== '' && category !== '') {
      dispatch(addAction({
        item_id: uuidv4(),
        title: name,
        author,
        category,
      }));
      setName('');
      setAuthor('');
    }
  };
  return (
    <form>
      <input className="name" type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Book title" value={name} />
      <input className="author" type="text" name="author" onChange={(e) => setAuthor(e.target.value)} placeholder="Author" value={author} />
      <select name="categories" onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">Select</option>
        {categoryOptions.map((book) => (
          <option key={uuidv4()} value={book}>{book}</option>
        ))}
      </select>
      <button type="submit" onClick={(e) => addBook(e)}>Add Book</button>
    </form>
  );
};

export default AddBook;
