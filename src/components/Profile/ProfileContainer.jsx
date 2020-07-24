import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfile, getStatus, updateStatus} from '../../Redux/reducer-profile.js';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId)
			userId = 9334;
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	}
	render() {
		return (
			<Profile {...this.props} />
		);
	}
}

const mapPropsToState = (state) => ({
		profile : state.profilePage.profile,	
		status : state.profilePage.status
});

export default compose(connect(mapPropsToState, {getProfile, getStatus, updateStatus}), withRouter)(ProfileContainer)