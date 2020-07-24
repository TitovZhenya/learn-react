import React from 'react';
import style from './Dialogs.module.scss';
import Message from './Message/Message';
import Companion from './Companion/Companion';

const Dialogs = (props) => {
    let dialogs = props.dialogsData.map( (dialog, index) => <Companion key={index} id={dialog.id} name={dialog.name} />);
    let messages = props.messagesData.map( (message, index) => <Message key={index} id={message.id} text={message.text}/>);

    let onMessageAdd = () => {       
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let messageText = e.target.value;
        props.updateMessageText(messageText);
    }

	return(
		<div>
          <div className={style.content__dialogs}>
            <div className={style.companion}>
                {dialogs}
            </div>

            <div className={style.chat}>
            	<div className={style.chat__message}>{messages}</div>
                <div className={style.chat__addMessage}>
                    <textarea className={style.chat__area} value={props.newMessage} onChange={onMessageChange} placeholder='Enter text' />
                    <button className={style.chat__sendBtn} onClick={onMessageAdd}>Send</button>
                </div>
            </div>
            
          </div>
        </div>
		);
}

export default Dialogs;