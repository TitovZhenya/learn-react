import dialogsReducer from './reducer-dialogs';
import profileReducer from './reducer-profile';


let store = {
    _state : {
        profilePage : {
            posts : [
                {id : 1, text : "Hi, it's my first React project", likeCount : 13},
                {id : 2, text : "Good Luck", likeCount : 5}
            ],
            newPost : ''
        },
        dialogsPage : {
            dialogs : [
                {id : 1, name : 'John'},
                {id : 2, name : 'Eric'},
                {id : 3, name : 'Kyle'},
                {id : 4, name : 'Bruce'}
            ],
            messages : [
                {id : 1, text : 'Hi'},
                {id : 2, text : 'How are you'},
                {id : 3, text : 'Yo'},
                {id : 4, text : 'yo'},
                {id : 5, text : "I'm fine thx"},
                {id : 6, text : 'U mad'}
            ],
            newMessage : ''
        },
        navBar : {
            friends : [
                {id : 1, name : 'John'},
                {id : 2, name : 'Eric'},
                {id : 3, name : 'Kyle'},
                {id : 4, name : 'Bruce'}
            ]
        }
    },
    _callSubscriber(){
        console.log('state change');
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}





export default store;