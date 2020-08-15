import React from 'react';
import style from './FormsControls.module.scss';
import { Field } from 'redux-form';

export const generateForm = (component, name, validators, placeholder, props = {}, text = '') => {
    return (
        <div>
            <Field component={component} name={name} validate={validators} placeholder={placeholder} {...props} />
            {text}
        </div>
    )
}

const FormControl = ({ meta: { touched, error }, children }) => {
    const hasError = touched && error;
    return (
        <div className={hasError ? style.newPost__error : style.newPost__text}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input}  {...restProps} /></FormControl>
}