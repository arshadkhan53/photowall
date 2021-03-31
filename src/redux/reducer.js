// Post data reducer.
import post from '../data/posts'
import {combineReducers} from 'redux';

function comments(state={}, action) {
    switch (action.type) {
        case 'LOAD_COMMENTS': return action.comments
        case 'ADD_COMMENT': 
        if(!state[action.postId]) {
            return {...state, [action.postId]: [action.comment]}
        }else {
            return {...state, [action.postId]: [...state[action.postId],action.comment]}
        }
          
        //return [...state, action.comment]
        default: return state
    }
}

function authenticate(state = {isLoggedIn: false}, action) {
        switch(action.type) {
            case 'LOGIN' : return {isLoggedIn: action.status}
            case 'LOGOUT': return {isLoggedIn: action.status}
            default: return state
        }
}


 function posts(state = post, action) {
    switch(action.type) {
        // Remember we don't set state , we just modify it in redux.
        case 'LOAD_POSTS': return action.posts
        case 'REMOVE_POST': return [...state.slice(0,action.index), ...state.slice(action.index + 1)]
        case 'ADD_PHOTO' : return [...state, action.post]
        default: return state;
    }
}
const rootReducer = combineReducers({posts,comments,authenticate});
export default rootReducer;