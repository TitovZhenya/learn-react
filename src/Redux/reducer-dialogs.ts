const ADD_MESSAGE = 'reducer-dialogs/ADD_MESSAGE';

type TDialogs = {
    id: number
    name: string
}

type TMessages = {
    id: number
    text: string
}

let initiallState = {
    dialogs: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Eric' },
        { id: 3, name: 'Kyle' },
        { id: 4, name: 'Bruce' }
    ] as Array<TDialogs>,
    messages: [
        { id: 1, text: 'Hi' },
        { id: 2, text: 'How are you' },
        { id: 3, text: 'Yo' },
        { id: 5, text: "I'm fine thx" },
    ] as Array<TMessages>
};

type TInitialState = typeof initiallState

type dialogsActionsType = TAddMessage

const dialogsReducer = (state = initiallState, action: dialogsActionsType): TInitialState => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, { id: 13, text: action.text }],
            }
        }
        default:
            return state
    }
}

type TAddMessage = {
    type: typeof ADD_MESSAGE
    text: string
}
export const addMessage = (text: string) => ({ type: ADD_MESSAGE, text });

export default dialogsReducer;