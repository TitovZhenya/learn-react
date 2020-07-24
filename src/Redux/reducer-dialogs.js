const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initiallState = {
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
        };

const dialogsReducer = (state = initiallState, action) => {
    switch ( action.type ) {
		case ADD_MESSAGE:{
            return {
                ...state,
                messages : [...state.messages, {id : 13, text : state.newMessage}],
                newMessage : ''
            }
        }
        case UPDATE_MESSAGE:{
            return {
                ...state,
                newMessage : action.text
            }
        }
		default:
			return state
	}
}

export const addMessageActionCreator = () => ({type : ADD_MESSAGE});
export const updateMessageActionCreator = (text) => ({type : UPDATE_MESSAGE, text : text});

export default dialogsReducer;