import React from 'react';
import style from './Profile.module.scss';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import { TProfile, TPhoto } from '../../types/types';

interface IProps{
    profile: TProfile | null
    status: string
    owner: any
    updateStatus: (status: string) => void
    savePhoto: (photo: Array<TPhoto>) => void
    saveProfile: (profileData: TProfile) => void
}

const Profile:React.FC<IProps> = ({profile, status, owner, updateStatus, savePhoto, saveProfile}) => {
	return(
		<div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} 
            owner={owner} savePhoto={savePhoto} saveProfile={saveProfile}/>
			<MyPostsContainer />
		</div>
		);
}

export default Profile;