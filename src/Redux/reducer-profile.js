import { profileAPI } from '../API/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'reducer-profile/ADD-POST';
const SET_PROFILE = 'reducer-profile/SET_PROFILE';
const SET_STATUS = 'reducer-profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'reducer-profile/SAVE_PHOTO_SUCCESS';

let initiallState = {
    posts: [
        { id: 1, text: "Hi, it's my first React project", likeCount: 13 },
        { id: 2, text: "Good Luck", likeCount: 5 }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initiallState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 3, text: action.text, likeCount: 13 }],
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photo }
            }
        default:
            return state
    }
}

export const addPost = (text) => ({ type: ADD_POST, text });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photo) => ({ type: SAVE_PHOTO_SUCCESS, photo });

export const getProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(setProfile(data));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId)
        let status = JSON.parse(data);
        dispatch(setStatus(status))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0)
            dispatch(setStatus(status))
    }
}

export const savePhoto = photo => {
    return async (dispatch) => {
        const response = await profileAPI.savePhoto(photo);
        if (response.resultCode === 0)
            dispatch(savePhotoSuccess(response.data.photos))
    }
}

export const saveProfile = profileData => async (dispatch, getState) => {
    try {
        const userId = getState().auth.id;
        const response = await profileAPI.updateProfile(profileData);
        if (response.resultCode === 0)
            dispatch(getProfile(userId));
        else {
            dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }));
            return Promise.reject(response.messages[0]);
        }
    } catch (error) {
        console.log(error);
    }
}

export default profileReducer;