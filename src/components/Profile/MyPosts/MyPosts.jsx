import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPost = (props) => {
  let posts = props.postsData.map( (post, index) => <Post key={index} message={post.text} likeCount={post.likeCount} />);

  let onAddPost = () => {
    props.addPost();
  }

  let onChangePost = (e) => {
    let postText = e.target.value;
    props.changePostText(postText);
  }

	return(
		<div className={style.post}>
      <div className={style.post__add}>
        <textarea onChange={onChangePost} value={props.newPost} placeholder='Enter text'/>
        <input type="button" value="add post" onClick={onAddPost} /> 
      </div>
      {posts}
    </div>
		);
}

export default MyPost;