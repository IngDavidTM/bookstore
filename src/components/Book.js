import PropTypes from 'prop-types';
import '../stylesheets/Book.css';

const Book = ({ name, author }) => (
  <div className="book">
    <h2>{name}</h2>
    <p>{`Author: ${author}`}</p>
    <button type="button">Remove</button>
  </div>
);

Book.propTypes = {
  name: PropTypes.node.isRequired,
  author: PropTypes.node.isRequired,
};

export default Book;
