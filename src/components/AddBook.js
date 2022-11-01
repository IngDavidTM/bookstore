import '../stylesheets/AddBook.css';

const AddBook = () => (
  <form>
    <input type="text" name="name" placeholder="Name" />
    <input type="text" name="author" placeholder="Author" />
    <button type="submit">Add Book</button>
  </form>
);

export default AddBook;
