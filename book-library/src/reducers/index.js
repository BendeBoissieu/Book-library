import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  //books is a piece of state
  //booksreducer value of array
  books: BooksReducer
});

export default rootReducers;

