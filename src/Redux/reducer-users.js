import {usersAPI} from '../API/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initiallState = {
	users : [],
	usersCount : 0,
	usersOnPage : 10,
	currentUsersPage : 1,
	isFetching : true,
	followingInProgress : []
}

const usersReducer = (state = initiallState, action) => {
	switch ( action.type ) {
		case FOLLOW:
			return {
				...state,
				users : state.users.map( user => {
					if ( action.userId === user.id )
						return {...user, followed : true};
					return user;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users : state.users.map( user => {
					if ( action.userId === user.id )
						return {...user, followed : false};
					return user;
				})
			}
		case SET_USERS:
			return {
					...state,
					users : action.users
				}
		case SET_CURRENT_PAGE:
			return {
					...state,
					currentUsersPage : action.page
				}
		case SET_USERS_TOTAL_COUNT:
			return {
				...state,
				usersCount : action.usersCount
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching : action.isFetching
			}
		case TOGGLE_IS_FOLLOWING:
			return {
				...state,
				followingInProgress : action.isFetching 
				? [...state.followingInProgress, action.id] 
				: state.followingInProgress.filter( num => num != action.id )
			}
		default:
			return state			
	}
}

export const usersFollow = (userId) => ({type : FOLLOW, userId});
export const usersUnFollow = (userId) => ({type : UNFOLLOW, userId});
export const setUsers = (users) => ({type : SET_USERS, users});
export const setCurrentPage = (page) => ({type : SET_CURRENT_PAGE, page});
export const setUsersTotalCount = (usersCount) => ({type : SET_USERS_TOTAL_COUNT, usersCount})
export const toggleIsFetching = (isFetching) => ({type : TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowing = (isFetching, id) => ({type : TOGGLE_IS_FOLLOWING, isFetching, id})

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(currentPage, pageSize)
			.then( data => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(data.items));
				dispatch(setUsersTotalCount(data.totalCount));
			});
	}
}

export const unFollow = (id) => {
	return (dispatch) => {
		dispatch(toggleIsFollowing(true, id));
		usersAPI.unFollow(id)
			.then( data => {
			if ( data.resultCode === 0 )
				dispatch(usersUnFollow(id));
			dispatch(toggleIsFollowing(false, id));
		})
	}
}

export const follow = (id) => {
	return (dispatch) => {
		dispatch(toggleIsFollowing(true, id));
		usersAPI.follow(id)
			.then ( data => {
			if ( data.resultCode === 0 )
				dispatch(usersFollow(id));
			dispatch(toggleIsFollowing(false, id));
		})
	}
}

export default usersReducer;
