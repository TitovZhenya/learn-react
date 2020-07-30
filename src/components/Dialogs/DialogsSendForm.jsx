import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {requiredField, maxLengthCreator} from '../../utils/validators/validators';
import {FormsControls} from '../Common/FormsControls/FormsControls';

class DialogsSendForm extends React.Component{
	constructor(props){
		super(props);
		this.maxLength = maxLengthCreator(300);
		this.Textarea = FormsControls('textarea');
	}
	render(){
		return(
				<form onSubmit={this.props.handleSubmit}>
					<div>
						<Field component={this.Textarea} placeholder='enter message' name='messageText' validate={[requiredField, this.maxLength]}/>
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