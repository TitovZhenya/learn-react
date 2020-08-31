import { authAPI, securityAPI } from '../API/api'
import { stopSubmit } from 'redux-form'
import { AppThunk } from './redux-store'

const SET_USER_DATA = 'reducer-auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'reducer-auth/GET_CAPTCHA_URL_SUCCESS'

let initiallState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false as null | boolean,
    captchaUrl: null as null | string
};

export type TInitiallState = typeof initiallState

type TAuthActions = TSetUser | TGetCaptcha

const authReducer = (state = initiallState, action: TAuthActions): TInitiallState => {
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

type TSetUser = {
    type: typeof SET_USER_DATA
    payload: {
        id: number | null
        email: string | null
        login: string | null
        isAuth: boolean | null
    }
}

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean | null): TSetUser => ({
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth }
});

type TGetCaptcha = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: {
        captchaUrl: string
    }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): TGetCaptcha => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl }
})


export const getAuthUserData = (): AppThunk => async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = (email: string, password: number, rememberMe: boolean, captcha: string = ''): AppThunk => {
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

export const logout = (): AppThunk => async (dispatch) => {
    const data = await authAPI.logout()

    if (data.resultCode === 0)
        dispatch(setUserData(null, null, null, false));
}

export const getCaptchaUrl = (): AppThunk => async (dispatch) => {
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;