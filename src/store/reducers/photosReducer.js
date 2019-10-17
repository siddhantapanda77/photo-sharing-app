const initstate = {
    photos: []
}

const photosReducer = (state = initstate, action) =>
{
    switch(action.type){
        case 'GET_PHOTO_SUCCESS':
            console.log("Got the photos");
            console.log(action.payload)
            return ({
                ...state,
                photos: action.payload
            });
        case 'GET_PHOTO_ERROR':
                console.log("Not able to get the photos");
                return state;


        case 'ADD_PHOTO_SUCCESS':
                    console.log("Added the photo and here is state ");
                    console.log(state.comment)
                    return ({
                        ...state,
                        photos: [...state.photos, action.payload]
                            
                        
                });
        case 'ADD_PHOTO_ERROR':
                    console.log("Not able to add the photo");
                    return state;
      
        default :
                return state;
    }
}

export default photosReducer;