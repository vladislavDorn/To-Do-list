import { combineReducers } from 'redux';
import todo from './todo';
import search from './search';
import filter from './filter';

export default combineReducers({
    todo,
    search,
    filter
})