import { combineReducers } from 'redux';
import todos from './todos';
import filters from './filters';
import errors from './errors';

export default combineReducers({
  todos,
  filters,
  errors
});
