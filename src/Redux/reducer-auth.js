import {authAPI} from '../API/api';
import {stopSubmit} from 'redux-form';


const SET_USER_DATA = 'reducer-auth/SET_USER_DATA';

let initiallState = {
            id: null,
            email: null,
            login: null,
            isAuth : false
        };

const authReducer = (state = initiallState, action) => {
	switch ( action.type ) {
        case SET_USER_DATA:
            return{
                ...state,
                ...action.payload,
            }
        default:
			return state
	}
}

export const setUserData = (id, email, login, isAuth) => ({type : SET_USER_DATA, payload: {id, email, login, isAuth}});

export const getAuthUserData = () => async (dispatch) => {
        let data = await authAPI.me()

        if ( data.resultCode === 0 ) {
            let {id, email, login} = data.data;
            dispatch(setUserData(id, email, login, true));
        }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe)
        if ( data.resultCode === 0 ) 
            dispatch(getAuthUserData());
        else{
            let message = data.messages.length > 0 ? data.messages[0] : 'Incorect email or password';
            dispatch(stopSubmit('login', {_error : message}));
        }
    }
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
   
    if ( data.resultCode === 0 )
        dispatch(setUserData(null, null, null, false));
}

export default authReducer;