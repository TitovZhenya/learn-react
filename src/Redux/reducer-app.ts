import { getAuthUserData } from './reducer-auth';
import { AppThunk } from './redux-store';

const INITIALIZED_SUCCESS: string = 'reducer-app/INITIALIZED_SUCCESS';

type TInitialState = {
    initialized: boolean
}

const initiallState: TInitialState = {
    initialized: false
};

type TInitializedSuccess = {
    type: typeof INITIALIZED_SUCCESS
}
type TAppActions = TInitializedSuccess

const appReducer = (state = initiallState, action: TAppActions): TInitialState => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const initializedSuccess = (): TInitializedSuccess => ({ type: INITIALIZED_SUCCESS });

/**
 * * TypeScript for thunk (https://redux.js.org/recipes/usage-with-typescript)
 * ? AppThunk from ./redux-store
 */

export const initializeApp = (): AppThunk => dispatch => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default appReducer;