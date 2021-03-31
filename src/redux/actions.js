// removePost
import {database} from '../database/config';
// Addpost
export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(() => {
            dispatch(addPhoto(post))
        })
    }
}

// load posts
export function startLoadingPosts() {
    return ((dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })       
            dispatch(loadPosts(posts))
        })
    })
}

export function startRemovePost(index, id) {
 
    const updates = {
     [`posts/${id}`]: null,
     [`comments/${id}`]: null
    }
    /* this specifies the paths that we want to update to null 
    (basically delete)
    we're navigating to the post with id we clicked remove on, 
    as well as the comments belonging to that post, with 
    that same id. */ 
     
     return (dispatch) => {
     return database.ref().update(updates).then(() => {
     dispatch(removePost(index))
     }).catch((error) => {
     console.log(error)
     })
     }
    }


export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPhoto(post) {
    return {
        type: 'ADD_PHOTO',
        post // es6 is equal to post: post key-value as both name are same, we can use shortcut
    }
}

export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}
// add comment to firebase

export function startAddingComment(comment, postId) {
    return (dispatch) => {
        database.ref('comments/'+ postId).push(comment).then(()=> {
            dispatch(addComment(comment, postId))
        })
    }
}

// load comment
export function startLoadingComments() {
    return (dispatch) => {
        database.ref('comments').once('value').then((snapshot) => {
            let comments = {}
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))

        })
    }
}

export function loadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function makeLogin(status) {
    return {
        type: 'LOGIN',
        status
    }
}

export function makeLogout(status) {
    return {
        type: 'LOGOUT',
        status
    }
}