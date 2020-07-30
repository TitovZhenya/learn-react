import React from 'react';
import { render } from '@testing-library/react';
import profileReducer, {addPost} from './reducer-profile'

let state = {
    posts : [
            {id : 1, text : "Hi, it's my first React project", likeCount : 13},
            {id : 2, text : "Good Luck", likeCount : 5}
        ],
};

describe('reducer-profile tests', () => {
    test('message of new post should be correct', () => {
        let action = addPost('random message');
        let newState = profileReducer(state, action);
        expect(newState.posts[2].text).toBe('random message');  
    })
    test('message push should push to the object', () => {
        let action = addPost('text');
        let newState = profileReducer(state, action);
        expect(newState.posts.length).toBe(3);
    })
})