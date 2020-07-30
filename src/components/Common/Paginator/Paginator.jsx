import React from 'react';
import style from './Paginator.module.scss';

const Paginator = ({usersOnPage, onPageChanged, currentUsersPage}) => {
	let usersPagesCount = Math.ceil(100 / usersOnPage);
	let pagesArr = [];

	for ( let i = 1; i <= usersPagesCount; i++ ){
		pagesArr.push(i);
	}

	return (
			<div className={style.users__header}>
				{pagesArr.map( (page, i) => <span key={i} onClick={ () => onPageChanged(page)} 
					className={`${currentUsersPage === page ? style.users__page_active : undefined} ${style.users__page}`}>{page}</span> )}
			</div>
		)
}

export default Paginator;