import React from 'react';
import style from './Users.module.scss';
import Person from './Person/Person';
import Preloader from '../Common/Preloader/Preloader';

const Users = (props) => {

	let usersPagesCount = Math.ceil(100 / props.usersOnPage);
	let pagesArr = [];

	for ( let i = 1; i <= usersPagesCount; i++ ){
		pagesArr.push(i);
	}

	const onSwitchPage = (page) => {
		props.setCurrentPage(page);
		props.onPageChanged(page);
	}

	return (
		<div className={style.users}>
			<div className={style.users__header}>
				{pagesArr.map( (page, i) => <span key={i} onClick={ () => onSwitchPage(page)} 
					className={`${props.currentUsersPage === page ? style.users__page_active : undefined} ${style.users__page}`}>{page}</span> )}
			</div>
			
			<Preloader isFetching={props.isFetching} />
			
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