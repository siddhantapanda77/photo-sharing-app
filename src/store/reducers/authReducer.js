const initState ={
    user:{},
    isAuthenticated:false
}

const authReducer = (state=initState,action)=>{
           switch(action.type){
           case "SET_USER" : return{
                   ...state,
                   user:action.user,
                   isAuthenticated: !!Object.keys(action.user).length
           }
          default : return state;
       }
}

export default authReducer;