import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {setCurrentPage, getUsers, unFollow, follow} from '../../Redux/reducer-users';
import {getUsersSelector, getTotalUsersCount, getPageSize, getCurrentPage, getIsFetching, getFollowingUser} from '../../Redux/users-selectors';

class UsersContainer extends React.Component{
	constructor(props){
		super(props); 
		this.onPageChanged = this.onPageChanged.bind(this);
	}
	componentDidMount(){
		const {currentUsersPage, usersOnPage} = this.props;
		this.props.getUsers(currentUsersPage, usersOnPage);
	}
	onPageChanged(page){
		const {usersOnPage} = this.props;
		this.props.getUsers(page, usersOnPage);
		this.props.setCurrentPage(page)
	}
	render(){
		return <Users users={this.props.users} follow={this.props.follow} 
		unFollow={this.props.unFollow} setCurrentPage={this.props.setCurrentPage}
		usersCount={this.props.usersCount} usersOnPage={this.props.usersOnPage} 
		currentUsersPage={this.props.currentUsersPage} onPageChanged={this.onPageChanged}
		isFetching={this.props.isFetching} followingUser={this.props.followingUser} />
	}
}


const mapStateToProps = (state) => {
	return{
		users : getUsersSelector(state),
		usersCount : getTotalUsersCount(state),
		usersOnPage : getPageSize(state),
		currentUsersPage : getCurrentPage(state),
		isFetching : getIsFetching(state),
		followingUser : getFollowingUser(state)
	}
}

export default connect(mapStateToProps, {setCurrentPage, getUsers, unFollow, follow})(UsersContainer);
