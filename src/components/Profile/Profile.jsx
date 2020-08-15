import React from 'react';
import style from './Profile.module.scss';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = ({profile, status, updateStatus, userId, isAuth, owner, savePhoto, saveProfile}) => {
	return(
		<div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} 
            userId={userId} isAuth={isAuth} owner={owner} savePhoto={savePhoto} saveProfile={saveProfile}/>
			<MyPostsContainer />
		</div>
		);
}

export default Profile;