import React, { useState, useEffect, ChangeEvent } from 'react';
import style from './ProfileInfo.module.scss'

type Props = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus = (props:Props) => {
    const [editMode, setEditMode] = useState(false);

    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChanged = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div className={style.user__status}>
            {!editMode
                ? <div>
                    <b>Status: </b> <span onDoubleClick={activateEditMode}>{props.status || 'add status'}</span>
                </div>
                : <input onBlur={deactivateEditMode} onChange={onStatusChanged} autoFocus={true} type="text" value={status} />}
        </div>
    )
}

export default ProfileStatus;