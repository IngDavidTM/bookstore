import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import checkReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  check: checkReducer,
  books: booksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
