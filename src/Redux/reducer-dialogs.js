const ADD_MESSAGE = 'ADD_MESSAGE';

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
                {id : 5, text : "I'm fine thx"},
            ]
        };

const dialogsReducer = (state = initiallState, action) => {
    switch ( action.type ) {
		case ADD_MESSAGE:{
            return {
                ...state,
                messages : [...state.messages, {id : 13, text : action.text}],
            }
        }
		default:
			return state
	}
}

export const addMessage = (text) => ({type : ADD_MESSAGE, text});

export default dialogsReducer;