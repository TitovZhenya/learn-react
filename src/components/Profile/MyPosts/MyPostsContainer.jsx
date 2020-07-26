import React from 'react';
import MyPost from './MyPosts';
import {addPost} from './../../../Redux/reducer-profile.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
			postsData : state.profilePage.posts,
			newPost : state.profilePage.newPost
		}
}

const MyPostContainer = connect(mapStateToProps, {addPost})(MyPost);

export default MyPostContainer;