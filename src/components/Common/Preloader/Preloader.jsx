import React from 'react';
import preloaderImg from '../../../img/Infinity-1s-200px.svg';
import style from './Preloader.module.scss';

const Preloader = (props) => {
	return (
			<div>
				{props.isFetching ? 
					<div>
						<img src={preloaderImg} alt=""/>
					</div>
					: null
				}
			</div>
		)
} 

export default Preloader;