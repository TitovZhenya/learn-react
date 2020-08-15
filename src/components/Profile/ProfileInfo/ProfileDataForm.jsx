import React from 'react';
import { reduxForm } from 'redux-form';
import { generateForm, Input, Textarea } from '../../Common/FormsControls/FormsControls';
import { requiredField } from '../../../utils/validators/validators';
import style from '../../Common/FormsControls/FormsControls.module.scss';

const ProfileDataForm = ({ profile, handleSubmit, error}) => {
    debugger;
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            { error && 
						<div className={style.newPost__defaultError}>
							{error}
						</div>
					}
            <div><b>Full name: </b>{generateForm(Input, 'fullName', [requiredField], 'Your Name')}</div>
            <div><b>Loking for a job: </b>{generateForm(Input, 'lookingForAJob', [], null, { type: 'checkbox' })}</div>
            <div><b>My professionals skills: </b>{generateForm(Textarea, 'lookingForAJobDescription', [], 'My professional skills')}</div>
            <div><b>About me: </b>{generateForm(Textarea, 'aboutMe', [], 'About me')}</div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key}>
                            <b>{key} : </b>{generateForm(Input, 'contacts.' + key, [], key)}
                        </div>
                    )
                })}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm);

export default ProfileDataReduxForm;