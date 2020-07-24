let initiallState = {
            friends : [
                {id : 1, name : 'John'},
                {id : 2, name : 'Eric'},
                {id : 3, name : 'Kyle'},
                {id : 4, name : 'Bruce'}
            ]
        };

const navReducer = (state = initiallState, action) => state


export default navReducer;