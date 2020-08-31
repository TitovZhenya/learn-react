import { createStore, combineReducers, applyMiddleware, Action } from 'redux';
import thunkMiddleWare, { ThunkAction } from 'redux-thunk';
import dialogsReducer from './reducer-dialogs';
import profileReducer from './reducer-profile';
import navReducer from './reducer-nav';
import usersReducer from './reducer-users'
import authReducer from './reducer-auth';
import appReducer from './reducer-app';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

/**
 * * TypeScript for thunk (https://redux.js.org/recipes/usage-with-typescript)
 * ? : ThunkAction<void, RootState, unknown, Action<string>> 
 * ? Use AppThunk at all reducers
 */
export type RootState = ReturnType<typeof reducers>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default store;