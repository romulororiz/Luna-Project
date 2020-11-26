import { createStore, applyMiddleware } from 'redux';
import { userLoginReducer } from './Reducers/userLoginReducer';
import thunk from 'redux-thunk';

const store = createStore(userLoginReducer, applyMiddleware(thunk));

export default store;
