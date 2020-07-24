import React from 'react';
import style from './Friends.module.scss';

const Friends = (props) => {
	return(
      <div className={style.friend}>
          <img src="https://ava-24.com/_ph/98/563228947.jpg" alt=""/>
          <span>{props.name}</span>
      </div>
		);
}

export default Friends;