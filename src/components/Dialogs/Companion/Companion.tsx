import React from 'react';
import style from './Companion.module.scss';
import {NavLink} from 'react-router-dom';

interface IProps {
    id: any
    name: string
}

const Companion:React.FC<IProps> = (props) => {
	return(
		<div className={style.companion__body}>
			<NavLink to={"/Dialogs/" + props.id} activeClassName={style.active}> 
				<img src="https://ava-24.com/_ph/98/563228947.jpg" className={style.companion__photo} alt=""/>
				<span className={style.companion__name}>{ props.name }</span>
			</NavLink>
		</div>
		);
}

export default Companion;