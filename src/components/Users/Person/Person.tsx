import React from 'react';
import style from './Person.module.scss';
import profileImg from './../../../img/images.png';
import { NavLink } from 'react-router-dom';
import { TUser, TPhoto } from '../../../types/types';

interface IMapStateProp{
    photo: string | null
    followed: boolean
    id: number
    userName: string
    status: string
}

interface IMapDispatchProp{
    followingUser: Array<number>
    unFollow: (userId:number) => void
    follow: (userId:number) => void
}

type TProp = IMapStateProp & IMapDispatchProp

const Person:React.FC<TProp> = (props) => {
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
            </div>
        </div>
    )
}

export default Person;