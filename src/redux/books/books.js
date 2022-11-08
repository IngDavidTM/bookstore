const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initialState = [{
  id: 0,
  name: 'Harry Potter',
  author: 'J. K. Rowling',
}, {
  id: 1,
  name: 'The Lord of the Rings',
  author: 'J. R. R. Tolkien',
}, {
  id: 2,
  name: 'El psicoanalista',
  author: 'John Katzenbach',
}];

export const addAction = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeAction = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
