import React from 'react';
import style from './FormsControls.module.scss';
import {Field} from 'redux-form';

export const FormsControls = Element => ({input, meta : {error, touched}, ...props}) => {
	const wrongText = error && touched;
	return (
			<div className={style.newPost}>
				<div>
					<Element className={wrongText ? style.newPost__error : style.newPost__text} {...input} {...props} />
				</div>
				{wrongText && <span className={style.newPost__error}>{error}</span>}
			</div>

		)
}

export const generateForm = (component, name, validators, placeholder, props = {}, text = '') => {
	return (
			<div>
				<Field component={component} name={name} validate={validators} placeholder={placeholder} {...props}/>
				{text}
			</div>
		)
}