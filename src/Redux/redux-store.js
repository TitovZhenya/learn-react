import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import dialogsReducer from './reducer-dialogs';
import profileReducer from './reducer-profile';
import navReducer from './reducer-nav';
import usersReducer from './reducer-users'
import authReducer from './reducer-auth';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
	profilePage : profileReducer,
	dialogsPage : dialogsReducer,
	navBar : navReducer,
	usersPage : usersReducer,
	auth : authReducer,
	form : formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store

export default store;