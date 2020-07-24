import React from 'react';
import style from './ProfileInfo.module.scss';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const Profile = (props) => {
  if (!props.profile){
    return <Preloader isFetching={true} />
  }
  return(
    <div>
      <div className={style.content__banner}>
        <img src="https://www.weigels.com/wp-content/uploads/2016/11/mountains-hero.jpg" alt=""/>
      </div>

      <div className={style.user}>
        <div className={style.user__photo}>
          <img src={props.profile.photos.large} alt=""/>
        </div>

        <div className={style.user__info}>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
          <div>Name - {props.profile.fullName}</div>
          <div>contacts:</div>
          <div>{props.profile.contacts.facebook}</div>
          <div>{props.profile.contacts.website}</div>
          <div>{props.profile.contacts.vk}</div>
          <div>{props.profile.contacts.twitter}</div>
          <div>{props.profile.contacts.instagram}</div>
          <div>{props.profile.contacts.youtube}</div>
          <div>{props.profile.contacts.github}</div>
          <div>{props.profile.contacts.mainLink}</div>
          <div>{props.profile.contacts.lookingForAJob}</div>
        </div> 
      </div>

    </div>
    );
}

export default Profile;