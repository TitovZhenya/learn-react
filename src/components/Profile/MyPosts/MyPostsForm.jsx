import React from 'react';
import style from './MyPosts.module.scss';
import { reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators';
import { generateForm, Textarea } from '../../Common/FormsControls/FormsControls';

class MyPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.maxLength = maxLengthCreator(20);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    {generateForm(Textarea, 'postText', [requiredField, this.maxLength], 'Enter text')}
                </div>
                <div>
                    <button>Post</button>
                </div>
            </form>
        )
    }
}

MyPostForm = reduxForm({
    form: 'post'
})(MyPostForm);

export default MyPostForm;