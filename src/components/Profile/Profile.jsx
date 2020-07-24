import React from 'react';
import style from './Profile.module.scss';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
	return(
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
			<MyPostsContainer />
		</div>
		);
}

export default Profile;