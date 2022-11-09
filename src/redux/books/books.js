const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';
const initialState = [];

export const getBook = () => (dispatch) => {
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TYpOE5ekIC25miOud97q/books', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then(
      (data) => dispatch({ type: GET_BOOK, payload: data }),
    );
};

export const addAction = (payload) => (dispatch) => {
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TYpOE5ekIC25miOud97q/books', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(
      () => dispatch({ type: ADD_BOOK, payload }),
    );
};

export const removeAction = (payload) => (dispatch) => {
  fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TYpOE5ekIC25miOud97q/books/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: payload,
    }),
  })
    .then(
      () => dispatch({ type: REMOVE_BOOK, payload }),
    );
};

const booksReducer = (state = initialState, action) => {
  const list = [];
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case GET_BOOK:
      Object.keys(action.payload).forEach((element) => {
        const book = action.payload[element][0];
        book.item_id = element;
        list.push(book);
      });
      return list;
    default:
      return state;
  }
};

export default booksReducer;
