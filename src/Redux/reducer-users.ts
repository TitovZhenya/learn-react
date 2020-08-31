import { usersAPI } from '../API/api';
import { updateObjectInArray } from '../utils/object-helpers';
import { AppThunk } from './redux-store'
import { TPhoto, TUser } from '../types/types';

const FOLLOW = 'reducer-users/FOLLOW';
const UNFOLLOW = 'reducer-users/UNFOLLOW';
const SET_USERS = 'reducer-users/SET_USERS';
const SET_CURRENT_PAGE = 'reducer-users/SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'reducer-users/SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'reducer-users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'reducer-users/TOGGLE_IS_FOLLOWING';



let initiallState = {
    users: [] as Array<TUser>,
    usersCount: 0,
    usersOnPage: 10,
    currentUsersPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

type TInitialState = typeof initiallState

const usersReducer = (state = initiallState, action:any):TInitialState => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentUsersPage: action.page
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                usersCount: action.usersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(num => num != action.id)
            }
        default:
            return state
    }
}
type TUserFollow = {
    type: typeof FOLLOW
    userId: number
}

type TUserUnFollow = {
    type: typeof UNFOLLOW
    userId: number
}

type TSetUsers = {
    type: typeof SET_USERS
    users: Array<TUser>
}

type TSetPage = {
    type: typeof SET_CURRENT_PAGE
    page: number
}

type TSetUsersTotalCount = {
    type: typeof SET_USERS_TOTAL_COUNT
    usersCount: number
}

type TToggleIsFetching = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

type TToggleIsFollowing = {
    type: typeof TOGGLE_IS_FOLLOWING
    isFetching: boolean
    id: number
}
export const usersFollow = (userId:number):TUserFollow => ({ type: FOLLOW, userId });
export const usersUnFollow = (userId:number):TUserUnFollow => ({ type: UNFOLLOW, userId });
export const setUsers = (users:Array<TUser>):TSetUsers => ({ type: SET_USERS, users });
export const setCurrentPage = (page:number):TSetPage => ({ type: SET_CURRENT_PAGE, page });
export const setUsersTotalCount = (usersCount:number):TSetUsersTotalCount => ({ type: SET_USERS_TOTAL_COUNT, usersCount })
export const toggleIsFetching = (isFetching:boolean):TToggleIsFetching => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowing = (isFetching:boolean, id:number):TToggleIsFollowing => ({ type: TOGGLE_IS_FOLLOWING, isFetching, id })

export const getUsers = (currentPage:number, pageSize:number):AppThunk => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize)

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch:any, id:number, apiMethod:any, actionCreator:any) => {
    dispatch(toggleIsFollowing(true, id));
    let data = await apiMethod(id)
    if (data.resultCode === 0)
        dispatch(actionCreator(id));
    dispatch(toggleIsFollowing(false, id));
}

export const unFollow = (id:number):AppThunk => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, id, usersAPI.unFollow, usersUnFollow)
    }
}

export const follow = (id:number):AppThunk => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, id, usersAPI.follow, usersFollow)
    }
}

export default usersReducer;
