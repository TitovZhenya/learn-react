import React from 'react';
import {reduxForm, Field} from 'redux-form';

class DialogsSendForm extends React.Component{
	render(){
		return(
				<form onSubmit={this.props.handleSubmit}>
					<div>
						<Field component='textarea' name='messageText' />
					</div>
					<div>
						<button>Send message</button>
					</div>
				</form>
			)
	}
}

DialogsSendForm = reduxForm({
	form : 'sendMessage'
})(DialogsSendForm);

export default DialogsSendForm;