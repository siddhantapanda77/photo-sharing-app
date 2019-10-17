
const initstate = {
    comment: []
}
const commentsReducer = (state = initstate, action) =>
{
    switch(action.type){
        case 'GET_COMMENT_SUCCESS':
            console.log("Got the comments");
            console.log(action.payload)
            return ({
                ...state,
                comment: action.payload
            });
        case 'GET_COMMENT_ERROR':
                console.log("Not able to get the comments");
                return state;
        case 'ADD_COMMENT_SUCCESS':
                console.log("Added the comment and here is state ");
                console.log(state.comment)
                return ({
                    ...state,
                    comment: [...state.comment, action.payload]
                        
                    
            });
        case 'ADD_COMMENT_ERROR':
                console.log("Not able to add the comments");
                return state;
        default :
                return state;
    }
}

export default commentsReducer;