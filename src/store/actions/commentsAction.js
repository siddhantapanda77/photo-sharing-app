import axios from "axios";

export const getComments = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res=> {
            dispatch({ type: 'GET_COMMENT_SUCCESS', payload: res.data});


        })
        .catch(err => {
            dispatch({ type: 'GET_COMMENT_ERROR', err})
        })
       
        // axios.put('https://jsonplaceholder.typicode.com/photos')
        // .then(res=> {
        //     dispatch({ type: 'ADD_PHOTO_SUCCESS', payload: res.data});
        // })
        // .catch(err => {
        //     dispatch({ type: 'GET_PHOTO_ERROR', err})
        // })
    }
}

export const addComment = (newCo) => {
    return (dispatch) => {
        axios.post('https://jsonplaceholder.typicode.com/comments', newCo)
        .then(res=> {
            console.log("In the post actions and it is updated")
            console.log(res.data)
            dispatch({ type: 'ADD_COMMENT_SUCCESS', payload: res.data});


        })
        .catch(err => {
            dispatch({ type: 'ADD_COMMENT_ERROR', err})
        })


    }
}