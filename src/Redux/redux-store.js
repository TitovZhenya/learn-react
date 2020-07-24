import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import dialogsReducer from './reducer-dialogs';
import profileReducer from './reducer-profile';
import navReducer from './reducer-nav';
import usersReducer from './reducer-users.js'
import authReducer from './reducer-auth.js'

let reducers = combineReducers({
	profilePage : profileReducer,
	dialogsPage : dialogsReducer,
	navBar : navReducer,
	usersPage : usersReducer,
	auth : authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store

export default store;