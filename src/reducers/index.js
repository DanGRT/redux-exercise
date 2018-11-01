import { combineReducers } from 'redux';
import searchInput from './searchInput';
import searchResults from './searchResults';
import searchCategory from './searchCategory';

export default combineReducers({
  searchInput,
  searchResults,
  searchCategory,
});
