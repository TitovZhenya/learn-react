import React, { useState, useEffect } from 'react';

const ProfileStatus = (props) => {
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

    const onStatusChanged = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode
                ? <span onDoubleClick={activateEditMode}>{props.status || 'add status'}</span>
                : <input onBlur={deactivateEditMode} onChange={onStatusChanged} autoFocus={true} type="text" value={status} />}
        </div>
    )
}

export default ProfileStatus;