export const getUsersSelector = (state) => {
	return state.usersPage.users;
}

export const getTotalUsersCount = (state) => {
	return state.usersPage.usersCount;
}

export const getPageSize = (state) => {
	return state.usersPage.usersOnPage;
}

export const getCurrentPage = (state) => {
	return state.usersPage.currentUsersPage;
}

export const getIsFetching = (state) => {
	return state.usersPage.isFetching;
}

export const getFollowingUser = (state) => {
	return state.usersPage.followingInProgress;
}