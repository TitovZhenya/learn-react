import { RootState } from "./redux-store";

export const getUsersSelector = (state:RootState) => {
    return state.usersPage.users;
}

export const getTotalUsersCount = (state: RootState) => {
    return state.usersPage.usersCount;
}

export const getPageSize = (state: RootState) => {
    return state.usersPage.usersOnPage;
}

export const getCurrentPage = (state: RootState) => {
    return state.usersPage.currentUsersPage;
}

export const getIsFetching = (state: RootState) => {
    return state.usersPage.isFetching;
}

export const getFollowingUser = (state: RootState) => {
    return state.usersPage.followingInProgress;
}