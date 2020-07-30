import React from 'react';
import style from './MyPosts.module.scss';
import {Field, reduxForm} from 'redux-form';
import {requiredField, maxLengthCreator} from '../../../utils/validators/validators';
import {FormsControls} from '../../Common/FormsControls/FormsControls';

class MyPostForm extends React.Component{
  constructor(props){
    super(props);
    this.maxLength = maxLengthCreator(20);
    this.Textarea = FormsControls('textarea');
  }
    
  render(){
    return(
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <Field component={this.Textarea} name='postText' validate={[requiredField, this.maxLength]} placeholder='Enter text' />
          </div>
          <div>
            <button>Post</button>
          </div>
        </form>
      )
  }
}

MyPostForm = reduxForm({
  form : 'post'
})(MyPostForm);

export default MyPostForm;