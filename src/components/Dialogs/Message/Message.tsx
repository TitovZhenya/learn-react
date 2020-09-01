import React from 'react';
import style from './Message.module.scss';

interface IProps{
    text: string
    id: number
}

const Message: React.FC<IProps> = (props) => {
    return (
        <div className={style.chat__body}>
            <div className={style.chat__message} > {props.id} {props.text}</div>
        </div>
    );
}

export default Message;