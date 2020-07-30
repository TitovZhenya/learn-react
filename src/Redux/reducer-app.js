import {authAPI} from '../API/api';
import {stopSubmit} from 'redux-form';
import {getAuthUserData} from './reducer-auth';


const INITIALIZED_SUCCESS = 'reducer-app/INITIALIZED_SUCCESS';

let initiallState = {
            initialized : false
        };

const appReducer = (state = initiallState, action) => {
	switch ( action.type ) {
        case INITIALIZED_SUCCESS:
            return{
                ...state,
                initialized : true
            }
        default:
			return state
	}
}

export const initializedSuccess = () => ({type : INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
    .then( () => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;