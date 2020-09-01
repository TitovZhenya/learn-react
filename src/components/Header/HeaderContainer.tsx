import React from 'react';
import Header from './Header';
import { logout } from '../../Redux/reducer-auth';
import { connect } from 'react-redux';
import { type } from 'os';
import { RootState } from '../../Redux/redux-store';

interface IMapStateProps {
    login: string | null
    isAuth: boolean | null
}

interface IMapDispatchProps {
    logout: () => void
}

interface IOwnProps { }

type TProps = IMapStateProps & IMapDispatchProps

class HeaderContainer extends React.Component<TProps> {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: RootState): IMapStateProps => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect<IMapStateProps, IMapDispatchProps, IOwnProps, RootState>(mapStateToProps, { logout })(HeaderContainer);