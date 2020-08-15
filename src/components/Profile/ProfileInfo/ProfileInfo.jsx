import React, { useState } from 'react';
import style from './ProfileInfo.module.scss';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfilePhoto from '../../../img/images.png';
import ProfileDataReduxForm from './ProfileDataForm';

const ProfileInfo = ({ profile, savePhoto, owner, status, updateStatus, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);

    const onProfilePhotoSelected = (e) => {
        if (e.target.files.length)
            savePhoto(e.target.files[0]);
    }
    if (!profile) {
        return <Preloader isFetching={true} />
    }

    const onSubmit = (profileData) => {
        saveProfile(profileData).then(() => setEditMode(false));
    }

    return (
        <div>
            <div className={style.content__banner}>
                <img src="https://www.weigels.com/wp-content/uploads/2016/11/mountains-hero.jpg" alt="" />
            </div>

            <div className={style.user}>
                <div className={style.user__photo}>
                    <img src={profile.photos === undefined ? ProfilePhoto : profile.photos.large} alt="" />
                    {owner && <input type={'file'} onChange={onProfilePhotoSelected} />}
                </div>

                <div className={style.user__data}>
                    {editMode
                        ? <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
                        : <ProfileData profile={profile} owner={owner} goToEditMode={() => setEditMode(true)} />}
                    <ProfileStatus status={status} updateStatus={updateStatus} />
                </div>
            </div>

        </div>
    );
}

const ProfileData = ({ profile, owner, goToEditMode }) => {
    return (
        <>
            {owner && <div><button onClick={goToEditMode}>Edit</button></div>}
            <div><b>Full name: </b>{profile.fullName}</div>
            <div><b>Loking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}</div>
            {profile.lookingForAJob && <div><b>My professionals skills: </b>{profile.lookingForAJobDescription}</div>}
            <div><b>About me: </b>{profile.aboutMe}</div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />)}
            </div>
        </>
    )
}

const Contacts = ({ contactTitle, contactValue }) => {
    return <div className={style.user__contacts}><b>{contactTitle}: </b>{contactValue}</div>
}

export default ProfileInfo;