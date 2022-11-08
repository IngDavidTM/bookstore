import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../stylesheets/Book.css';
import { removeAction } from '../redux/books/books';

const Book = ({ id, name, author }) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <h2>{name}</h2>
      <p>{`Author: ${author}`}</p>
      <button onClick={() => dispatch(removeAction(id))} type="button">Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  author: PropTypes.node.isRequired,
};

export default Book;
