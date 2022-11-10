import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addAction } from '../redux/books/books';
import '../stylesheets/AddBook.css';

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const addBook = (e) => {
    e.preventDefault();
    dispatch(addAction({
      item_id: uuidv4(),
      title: name,
      author,
      category: 'book',
    }));
    setName('');
    setAuthor('');
  };
  return (
    <form>
      <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Name" value={name} />
      <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)} placeholder="Author" value={author} />
      <button type="submit" onClick={(e) => addBook(e)}>Add Book</button>
    </form>
  );
};

export default AddBook;
