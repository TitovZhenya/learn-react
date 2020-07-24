import {usersAPI, profileAPI} from '../API/api';

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initiallState = {
            posts : [
                    {id : 1, text : "Hi, it's my first React project", likeCount : 13},
                    {id : 2, text : "Good Luck", likeCount : 5}
                ],
            newPost : '',
            profile : null,
            status : ''
        };

const profileReducer = (state = initiallState, action) => {
	switch ( action.type ) {
		case ADD_POST:
            return {
                ...state,
                posts : [...state.posts, {id : 3, text : state.newPost, likeCount : 0}],
                newPost : ''
            }
        case UPDATE_POST:
            return {
                ...state,
                newPost : action.text
            }
        case SET_PROFILE:
            return {
                ...state,
                profile : action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status : action.status
            }
        default:
			return state
	}
}

export const addPostActionCreator = () => ({type : ADD_POST});
export const updatePostActionCreator = (text) => ({type : UPDATE_POST, text});
export const setProfile = (profile) => ({type : SET_PROFILE, profile});
export const setStatus = (status) => ({type : SET_STATUS, status});

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then( data => {
                    dispatch(setProfile(data));
                });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then ( data => {
                let status = JSON.parse(data);
                dispatch(setStatus(status))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then ( data => {
                if( data.resultCode === 0 )
                    dispatch(setStatus(status))
            })
    }
}

export default profileReducer;