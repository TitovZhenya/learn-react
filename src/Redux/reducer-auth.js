import { authAPI, securityAPI } from '../API/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'reducer-auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'reducer-auth/GET_CAPTCHA_URL_SUCCESS';

let initiallState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initiallState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth }
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha = '') => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe, captcha);
        if (data.resultCode === 0)
            dispatch(getAuthUserData());
        else {
            if (data.resultCode === 10)
                dispatch(getCaptchaUrl());
            let message = data.messages.length > 0 ? data.messages[0] : 'Incorect email or password';
            dispatch(stopSubmit('login', { _error: message }));
        }
    }
}

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout()

    if (data.resultCode === 0)
        dispatch(setUserData(null, null, null, false));
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;