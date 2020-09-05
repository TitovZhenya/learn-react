import { profileAPI } from '../API/api';
import { stopSubmit } from 'redux-form';
import { AppThunk } from './redux-store'
import { TPost, TProfile, TPhoto } from '../types/types';

const ADD_POST = 'reducer-profile/ADD-POST';
const SET_PROFILE = 'reducer-profile/SET_PROFILE';
const SET_STATUS = 'reducer-profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'reducer-profile/SAVE_PHOTO_SUCCESS';

let initiallState = {
    posts: [
        { id: 1, text: "Hi, it's my first React project", likeCount: 13 },
        { id: 2, text: "Good Luck", likeCount: 5 }
    ] as Array<TPost>,
    profile: null as null | TProfile,
    status: '' as string
};

type TInitiallState = typeof initiallState

type TAction = TAddPost | TSetProfile | TSetStatus | TSavePhoto

const profileReducer = (state = initiallState, action: TAction): TInitiallState => {
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
                profile: { ...state.profile, photos: action.photo } as TProfile
            }
        default:
            return state
    }
}

type TAddPost = {
    type: typeof ADD_POST
    text: string
}

type TSetProfile = {
    type: typeof SET_PROFILE
    profile: TProfile
}

type TSetStatus = {
    type: typeof SET_STATUS
    status: string
}

type TSavePhoto = {
    type: typeof SAVE_PHOTO_SUCCESS
    photo: TPhoto
}
export const addPost = (text: string): TAddPost => ({ type: ADD_POST, text });
export const setProfile = (profile: TProfile): TSetProfile => ({ type: SET_PROFILE, profile });
export const setStatus = (status: string): TSetStatus => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photo: TPhoto): TSavePhoto => ({ type: SAVE_PHOTO_SUCCESS, photo });

export const getProfile = (userId: number | null): AppThunk => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(setProfile(data));
    }
}

export const getStatus = (userId: number): AppThunk => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId)
        let status = JSON.parse(data);
        dispatch(setStatus(status))
    }
}

export const updateStatus = (status: string): AppThunk => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0)
            dispatch(setStatus(status))
    }
}

export const savePhoto = (photo: TPhoto): AppThunk => {
    return async (dispatch) => {
        const response = await profileAPI.savePhoto(photo);
        if (response.resultCode === 0)
            dispatch(savePhotoSuccess(response.data))
    }
}

export const saveProfile = (profileData: TProfile): AppThunk => async (dispatch, getState) => {
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