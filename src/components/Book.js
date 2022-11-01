import PropTypes from 'prop-types';

const Book = ({ name, author }) => (
  <div className="Book">
    <h2>{name}</h2>
    <p>{author}</p>
    <button type="button">Remove</button>
  </div>
);

Book.propTypes = {
  name: PropTypes.node.isRequired,
  author: PropTypes.node.isRequired,
};

export default Book;
