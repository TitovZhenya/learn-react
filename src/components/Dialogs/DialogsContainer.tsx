import React from 'react';
import { addMessage } from '../../Redux/reducer-dialogs';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { RootState } from '../../Redux/redux-store';
import { TMessages, TDialogs } from '../../Redux/reducer-dialogs'

type TMapStateProps = {
    messagesData: Array<TMessages>
    dialogsData: Array<TDialogs>
}

type TMapDispatchProps = {
    addMessage: (message:string) => void
}

type TOwnProps = {}

const mapPropsToState = (state: RootState): TMapStateProps => {
    return {
        messagesData: state.dialogsPage.messages,
        dialogsData: state.dialogsPage.dialogs,

    }
};

export default compose(connect<TMapStateProps,TMapDispatchProps,TOwnProps,RootState>(mapPropsToState, {addMessage}), withAuthRedirect)(Dialogs);

//newMessage: state.dialogsPage.newMessage