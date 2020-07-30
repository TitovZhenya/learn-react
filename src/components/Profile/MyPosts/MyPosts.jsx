import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';
import MyPostForm from './MyPostsForm';

const MyPost = React.memo(props => {
  let posts = props.postsData.map( (post, index) => <Post key={index} message={post.text} likeCount={post.likeCount} />);

  let onAddPost = (value) => {
    props.addPost(value.postText);
  }
	return(
		<div className={style.post}>
      <MyPostForm onSubmit={onAddPost}/>
      {posts}
    </div>
		);
})

export default MyPost;