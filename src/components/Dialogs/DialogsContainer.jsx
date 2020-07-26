import React from 'react';
import {addMessage} from './../../Redux/reducer-dialogs';
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

export default compose(connect(mapPropsToState, {addMessage}),withAuthRedirect)(Dialogs);