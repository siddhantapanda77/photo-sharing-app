import axios from "axios";

export const getPhotos = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
        .then(res=> {
            dispatch({ type: 'GET_PHOTO_SUCCESS', payload: res.data});
        })
        .catch(err => {
            dispatch({ type: 'GET_PHOTO_ERROR', err})
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


export const addPhoto = (newPh) => {
    return (dispatch) => {
        axios.post('https://jsonplaceholder.typicode.com/photos?albumId=1', newPh)
        .then(res=> {
            console.log("In the post actions and it is updated")
            console.log(res.data)
            dispatch({ type: 'ADD_PHOTO_SUCCESS', payload: res.data});


        })
        .catch(err => {
            dispatch({ type: 'ADD_PHOTO_ERROR', err})
        })


    }
}

