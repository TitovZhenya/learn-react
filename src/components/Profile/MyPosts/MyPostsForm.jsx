import React from 'react';
import style from './MyPosts.module.scss';
import {Field, reduxForm} from 'redux-form';

class MyPostForm extends React.Component{
  render(){
    return(
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <Field component='textarea' name='postText' />
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