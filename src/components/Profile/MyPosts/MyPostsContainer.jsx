import React from 'react';
import MyPost from './MyPosts';
import {addPostActionCreator, updatePostActionCreator} from './../../../Redux/reducer-profile.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
			postsData : state.profilePage.posts,
			newPost : state.profilePage.newPost
		}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost : () => {
			dispatch(addPostActionCreator());
		},
		
		changePostText : (postText) => {
			dispatch(updatePostActionCreator(postText));
		}
	}	
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;