import React from 'react';
import style from './Message.module.scss';

const Message = (props) => {
	return(
		<div className={style.chat__body}>
			<div className={style.chat__message}> {props.text }</div>
		</div>
		);
}

export default Message;