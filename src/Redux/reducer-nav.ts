export interface IFriends {
    id: number
    name: string
}

let initiallState = {
    friends: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Eric' },
        { id: 3, name: 'Kyle' },
        { id: 4, name: 'Bruce' }
    ] as Array<IFriends>
};

type TInitialState = typeof initiallState

const navReducer = (state = initiallState, action: any): TInitialState => state

export default navReducer;