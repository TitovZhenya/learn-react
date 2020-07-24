import {authAPI} from '../API/api';


const SET_USER_DATA = 'SET_USER_DATA';

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
                ...action.data,
                isAuth : true
            }
        default:
			return state
	}
}

export const setUserData = (id, email, login) => ({type : SET_USER_DATA, data: {id, email, login}});

export const getAuthUserData = () => (dispatch) => {
        authAPI.me()
            .then( data => {
                if ( data.resultCode === 0 ) {
                    let {id, email, login} = data.data;
                    dispatch(setUserData(id, email, login));
                }
            })
}

export default authReducer;