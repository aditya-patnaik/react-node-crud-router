import { combineReducers } from 'redux';
import BlogReducer from './BlogReducer';

export default combineReducers({
	blog: BlogReducer
});
