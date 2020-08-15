import React from 'react';
import { reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';
import { Redirect } from 'react-router-dom';
import { generateForm, Input } from '../Common/FormsControls/FormsControls';
import style from '../Common/FormsControls/FormsControls.module.scss';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.maxLength = maxLengthCreator(20)
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                {generateForm(Input, 'email', [requiredField, this.maxLength], 'Email')}
                {generateForm(Input, 'password', [requiredField, this.maxLength], 'Password', { type: 'password' })}
                {generateForm(Input, 'rememberMe', [], null, { type: 'checkbox' }, 'Remember me')}
                {this.props.captchaUrl && <div> <img src={this.props.captchaUrl} /> </div>}
                {this.props.captchaUrl && generateForm(Input, 'captcha', [requiredField], 'Symbols from image')}
                {this.props.error &&
                    <div className={style.newPost__defaultError}>
                        {this.props.error}
                    </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    }
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }
    onLoginSubmit(value) {
        this.props.login(value.email, value.password, value.rememberMe, value.captcha);

    }
    render() {
        if (this.props.isAuth)
            return <Redirect to='/profile' />
        return (
            <div>
                <h3>Login</h3>
                <LoginForm onSubmit={this.onLoginSubmit} captchaUrl={this.props.captchaUrl} />
            </div>
        )
    }
}

export default Login;