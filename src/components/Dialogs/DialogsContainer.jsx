import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from './../../Redux/reducer-dialogs';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

const mapPropsToState = (state) => {
    return {
        messagesData : state.dialogsPage.messages,
        dialogsData : state.dialogsPage.dialogs,
        newMessage : state.dialogsPage.newMessage
    }
};

const mapDispatchToState = (dispatch) => {
    return {
        addMessage : () => {
            dispatch(addMessageActionCreator());
        },

        updateMessageText : (messageText) => {
            dispatch(updateMessageActionCreator(messageText));
        }
    }
}

export default compose(connect(mapPropsToState, mapDispatchToState),withAuthRedirect)(Dialogs);