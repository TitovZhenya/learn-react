import React from 'react';
import {reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from '../../utils/validators/validators';
import {FormsControls} from '../Common/FormsControls/FormsControls';
import {Redirect} from 'react-router-dom';
import {generateForm} from '../Common/FormsControls/FormsControls';
import style from '../Common/FormsControls/FormsControls.module.scss';

class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.maxLength = maxLengthCreator(20)
		this.Input = FormsControls('input')
	}
	render(){
		return (
				<form onSubmit={this.props.handleSubmit}>
					{generateForm(this.Input, 'email', [requiredField, this.maxLength], 'Email')}
					{generateForm(this.Input, 'password', [requiredField, this.maxLength], 'Password', {type : 'password'})}
					{generateForm(this.Input, 'rememberMe', [], null, {type : 'checkbox'}, 'Remember me')}
					{ this.props.error && 
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
	form : 'login'
})(LoginForm);

class Login extends React.Component{
	constructor(props){
		super(props);
		this.loginValue = this.loginValue.bind(this);
	}
	loginValue(value){
		this.props.login(value.email, value.password, value.rememberMe);
		
	}
	render(){
		if ( this.props.isAuth ) 
			return <Redirect to='/profile' />
		return(
				<div>
					<h3>Login</h3>
					<LoginForm onSubmit={this.loginValue} />
				</div>
			)
	}
}

export default Login;