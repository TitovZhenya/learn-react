import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';
import { generateForm, Input } from '../Common/FormsControls/FormsControls';

class DialogsSendForm extends React.Component {
    constructor(props) {
        super(props);
        this.maxLength = maxLengthCreator(300);
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    {generateForm(Input, 'messageText', [requiredField, this.maxLength], 'enter message')}
					</div>
                <div>
                    <button>Send message</button>
                </div>
            </form>
        )
    }
}

DialogsSendForm = reduxForm({
    form: 'sendMessage'
})(DialogsSendForm);

export default DialogsSendForm;