import React from 'react';
import style from './ProfileInfo.module.scss';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfilePhoto from '../../../img/images.png';

const Profile = (props) => {
    const onProfilePhotoSelected = (e) => {
        if (e.target.files.length)
            props.savePhoto(e.target.files[0]);
    }
    if (!props.profile) {
        return <Preloader isFetching={true} />
    }
    return (
        <div>
            <div className={style.content__banner}>
                <img src="https://www.weigels.com/wp-content/uploads/2016/11/mountains-hero.jpg" alt="" />
            </div>

            <div className={style.user}>
                <div className={style.user__photo}>
                    <img src={props.profile.photos.large === null ? ProfilePhoto : props.profile.photos.large} alt="" />
                    {props.owner && <input type={'file'} onChange={onProfilePhotoSelected} />}
                </div>

                <div className={style.user__data}>
                    <ProfileData profile={props.profile} />
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />                 
                </div>
            </div>

        </div>
    );
}

const ProfileData = ({ profile }) => {
    return (
        <>
            <div><b>Full name: </b>{profile.fullName}</div>
            <div><b>Loking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}</div>
            {profile.lookingForAJob && <div><b>My professionals skills: </b>{profile.lookingForAJobDescription}</div>}
            <div><b>About me: </b>{profile.aboutMe}</div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map( key => <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />)}
            </div>
        </>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={style.user__contacts}><b>{contactTitle}: </b>{contactValue}</div>
}

export default Profile;