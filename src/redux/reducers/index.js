import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postReducer,
  // Add other reducers as needed
});

export default rootReducer;
