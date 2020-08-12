import React from 'react';
import style from './Users.module.scss';
import Person from './Person/Person';
import Preloader from '../Common/Preloader/Preloader';
import Paginator from '../Common/Paginator/Paginator';

const Users = (props) => {
	return (
		<div className={style.users}>
            <Paginator totalItemsCount={props.usersCount} usersOnPage={props.usersOnPage} onPageChanged={props.onPageChanged} 
            currentUsersPage={props.currentUsersPage}/>
			
			{props.isFetching && <Preloader />}

			<div className={style.users__list}>
				{props.users.map( (person, index) => <Person key={index} userName={person.name} 
				status={person.status} followed={person.followed} location={person.location} id={person.id} 
				follow={props.follow} unFollow={props.unFollow} photo={person.photos.small}
				id={person.id} followingUser={props.followingUser} />)}
			</div>
		</div>
		)
}

export default Users;