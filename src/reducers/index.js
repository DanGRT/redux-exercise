import { combineReducers } from 'redux';
import searchInput from './searchInput';
import searchResults from './searchResults'

export default combineReducers({
  searchInput,
  searchResults
});
