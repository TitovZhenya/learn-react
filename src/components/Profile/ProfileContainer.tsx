import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../Redux/reducer-profile';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { TProfile, TPhoto } from '../../types/types';
import { RootState } from '../../Redux/redux-store';

interface IMapStateProps {
    match?: any
    history?: any
    userId: number | null
    profile: TProfile | null
    status: string
}

interface IMapDispatchProps {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (photo: Array<TPhoto>) => void
    saveProfile: (profileData: TProfile) => void
}

type TProps = IMapStateProps & IMapDispatchProps

class ProfileContainer extends React.Component<TProps> {
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

    componentDidUpdate(prevProps: TProps) {
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

const mapPropsToState = (state:RootState):IMapStateProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id,
});

export default compose(connect(mapPropsToState, { getProfile, getStatus, updateStatus, savePhoto, saveProfile }), withRouter)(ProfileContainer)