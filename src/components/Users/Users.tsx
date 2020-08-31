import React from 'react';
import style from './Users.module.scss';
import Person from './Person/Person';
import Preloader from '../Common/Preloader/Preloader';
import Paginator from '../Common/Paginator/Paginator';
import { TUser } from '../../types/types';

type Props = {
    usersCount: number
    usersOnPage: number
    currentUsersPage: number
    isFetching: boolean
    users: Array<TUser>
    followingUser: Array<number>
    onPageChanged: (pageNumber: number) => void
    follow: (userId:number) => void
    unFollow: (userId:number) => void
}

const Users: React.FC<Props> = (props) => {
    return (
        <div className={style.users}>
            <Paginator totalItemsCount={props.usersCount} usersOnPage={props.usersOnPage} onPageChanged={props.onPageChanged}
                currentUsersPage={props.currentUsersPage} />

            {props.isFetching && <Preloader />}

            <div className={style.users__list}>
                {props.users.map((person, index) => <Person key={index} userName={person.name}
                    status={person.status} followed={person.followed} id={person.id}
                    follow={props.follow} unFollow={props.unFollow} photo={person.photos.small}
                    followingUser={props.followingUser} />)}
            </div>
        </div>
    )
}

export default Users;