import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Users from './Users';
import {setCurrentPage, getUsers, unFollow, follow} from '../../Redux/reducer-users';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component{
	constructor(props){
		super(props);
		this.onPageChanged = this.onPageChanged.bind(this);
	}
	componentDidMount(){
		this.props.getUsers(this.props.currentUsersPage, this.props.usersOnPage);
	}
	onPageChanged(page){
		this.props.getUsers(page, this.props.usersOnPage);
	}
	render(){
		return <Users users={this.props.users} follow={this.props.follow} 
		unFollow={this.props.unFollow} setCurrentPage={this.props.setCurrentPage}
		usersCount={this.props.usersCount} usersOnPage={this.props.usersOnPage} 
		currentUsersPage={this.props.currentUsersPage} onPageChanged={this.onPageChanged}
		isFetching={this.props.isFetching} followingUser={this.props.followingUser} />
	}
}


const mapPropsToState = (state) => {
	return{
		users : state.usersPage.users,
		usersCount : state.usersPage.usersCount,
		usersOnPage : state.usersPage.usersOnPage,
		currentUsersPage : state.usersPage.currentUsersPage,
		isFetching : state.usersPage.isFetching,
		followingUser : state.usersPage.followingInProgress
	}
}

export default compose(
	connect(mapPropsToState, {setCurrentPage, getUsers, unFollow, follow}),
	withAuthRedirect
	)(UsersContainer)
