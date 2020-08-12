import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus, savePhoto } from '../../Redux/reducer-profile.js';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId)
                this.props.history.push('/login')
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }


    }

    render() {
        return (
            <Profile {...this.props} owner={!this.props.match.params.userId} />
        );
    }
}

const mapPropsToState = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(connect(mapPropsToState, { getProfile, getStatus, updateStatus, savePhoto }), withRouter)(ProfileContainer)