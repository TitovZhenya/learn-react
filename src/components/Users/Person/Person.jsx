import React from 'react';
import style from './Person.module.scss';
import profileImg from './../../../img/images.png';
import { NavLink } from 'react-router-dom';

const Person = (props) => {
    return (
        <div className={style.listItem}>
            <div className={style.listItem__photo}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photo != null ? props.photo : profileImg} alt="" />
                </NavLink>
                {props.followed
                    ? <button disabled={props.followingUser.some(v => v === props.id)}
                        className={style.listItem__follow} onClick={() => props.unFollow(props.id)}>UnFollow</button>
                    : <button disabled={props.followingUser.some(v => v === props.id)}
                        className={style.listItem__follow} onClick={() => props.follow(props.id)} >Follow</button>}
            </div>
            <div className={style.listItem__info}>
                <div className={style.listItem__bio}>
                    <div className={style.listItem__name}>
                        {props.userName}
                    </div>
                    <div className={style.listItem__Status}>
                        {props.status}
                    </div>
                </div>
                <div className={style.listItem__location}>
                    <div className={style.listItem__country}>
                        {'props.location.country'}
                    </div>
                    <div className={style.listItem__city}>
                        {'props.location.city'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person;