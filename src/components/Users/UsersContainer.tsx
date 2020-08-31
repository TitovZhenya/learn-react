import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {setCurrentPage, getUsers, unFollow, follow} from '../../Redux/reducer-users';
import {getUsersSelector, getTotalUsersCount, getPageSize, getCurrentPage, getIsFetching, getFollowingUser} from '../../Redux/users-selectors';
import { TUser } from '../../types/types';
import { RootState } from '../../Redux/redux-store'

type TMapStateProps ={
    currentUsersPage: number
    usersOnPage: number
    users: Array<TUser>
    usersCount: number
    isFetching: boolean
    followingUser: Array<number>
}

type TMapDispatchProps = {
    follow: (userId:number) => void
    unFollow: (userId:number) => void
    getUsers: (currentUsersPage:number, usersOnPage:number) => void
    setCurrentPage: (pageNumber:number) => void
}

type TOWNProps = {}

type PropsType = TMapStateProps & TMapDispatchProps

class UsersContainer extends React.Component<PropsType>{
	constructor(props:PropsType){
		super(props); 
		this.onPageChanged = this.onPageChanged.bind(this);
	}
	componentDidMount(){
		const {currentUsersPage, usersOnPage} = this.props;
		this.props.getUsers(currentUsersPage, usersOnPage);
	}
	onPageChanged(page:number){
		const {usersOnPage} = this.props;
		this.props.getUsers(page, usersOnPage);
		this.props.setCurrentPage(page)
	}
	render(){
		return <Users users={this.props.users} follow={this.props.follow} 
		unFollow={this.props.unFollow} usersCount={this.props.usersCount} usersOnPage={this.props.usersOnPage} 
		currentUsersPage={this.props.currentUsersPage} onPageChanged={this.onPageChanged}
		isFetching={this.props.isFetching} followingUser={this.props.followingUser} />
	}
}


const mapStateToProps = (state: RootState):TMapStateProps => {
	return{
		users : getUsersSelector(state),
		usersCount : getTotalUsersCount(state),
		usersOnPage : getPageSize(state),
		currentUsersPage : getCurrentPage(state),
		isFetching : getIsFetching(state),
		followingUser : getFollowingUser(state)
	}
}

export default connect<TMapStateProps, TMapDispatchProps, TOWNProps, RootState>(mapStateToProps, {setCurrentPage, getUsers, unFollow, follow})(UsersContainer);
