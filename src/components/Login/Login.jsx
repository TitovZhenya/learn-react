import React from 'react';
import {reduxForm, Field} from 'redux-form';

class LoginForm extends React.Component{
	render(){
		return (
				<form onSubmit={this.props.handleSubmit}>
					<div>
						<Field component='input' name='login' />
					</div>
					<div>
						<Field component='input' name='password' />
					</div>
					<div>
						<Field component='input' type='checkbox' name='rememberMe' /> Remember me
					</div>
					<div>
						<button>Login</button>
					</div>
				</form>
			)
	}
}

LoginForm = reduxForm({
	'form' : 'login'
})(LoginForm);

class Login extends React.Component{
	loginValue(value){

	}
	render(){
		return(
				<div>
					<h3>Login</h3>
					<LoginForm onSubmit={this.loginValue} />
				</div>
			)
	}
}

export default Login;