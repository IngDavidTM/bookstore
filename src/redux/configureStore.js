import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import checkReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  check: checkReducer,
  books: booksReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
