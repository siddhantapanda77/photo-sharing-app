const initState = {
    users: []
}

const usersReducer = ( state = initState, action ) => {
    // console.log("Here is reducer");
    // console.log(state);
    // console.log(action.payload)
    if (action.type === 'GET_USERS'){
        return({
            ...state,
            users: action.payload
        })
    
    }
    else return state


}

export default usersReducer