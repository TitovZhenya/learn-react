import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { login } from '../../Redux/reducer-auth';
import { RootState } from '../../Redux/redux-store';

interface IMapStateProps {
    isAuth: boolean | null
    captchaUrl: null | string
}

interface IMapDispatchProps{
    login: (email: string, password: number, rememberMe: boolean, captcha: string) => void
}

interface IOwnProp {}

type TProps = IMapStateProps & IMapDispatchProps

class LoginContainer extends React.Component<TProps> {
    render() {
        return (
            <Login {...this.props} />
        )
    }
}

const mapStateToProps = (state:RootState):IMapStateProps => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect<IMapStateProps, IMapDispatchProps, IOwnProp, RootState>(mapStateToProps, { login })(LoginContainer);