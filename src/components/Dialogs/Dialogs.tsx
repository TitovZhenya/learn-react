import React from 'react';
import style from './Dialogs.module.scss';
import Message from './Message/Message';
import Companion from './Companion/Companion';
import DialogsSendReduxForm from './DialogsSendForm';
import { TDialogs, TMessages } from '../../Redux/reducer-dialogs';

type Props = {
    dialogsData: Array<TDialogs>
    messagesData: Array<TMessages>
    addMessage: (message: string) => void
}

const Dialogs: React.FC<Props> = (props) => {
    let dialogs = props.dialogsData.map((dialog, index) => <Companion key={index} id={dialog.id} name={dialog.name} />);
    let messages = props.messagesData.map((message, index) => <Message key={index} id={message.id} text={message.text} />);

    let onMessageAdd = (value: any) => {
        props.addMessage(value.messageText);
    }

    return (
        <div>
            <div className={style.content__dialogs}>
                <div className={style.companion}>
                    {dialogs}
                </div>

                <div className={style.chat}>
                    <div className={style.chat__message}>{messages}</div>
                    <DialogsSendReduxForm onSubmit={onMessageAdd} />
                </div>

            </div>
        </div>
    );
}

export default Dialogs;