import { combineReducers } from 'redux';
import homeReducer from '../reducers/home/home';
import postsReducer from '../reducers/posts/posts';
import postDetailsReducer from '../reducers/postDetails/postDetails';

const rootReducer = combineReducers({ homeReducer, postsReducer, postDetailsReducer });

export default rootReducer;
