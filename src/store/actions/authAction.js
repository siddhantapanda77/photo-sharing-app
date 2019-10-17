import axios from 'axios'
import jwtDecode from 'jwt-decode'

export function setCurrentUser(user){
    console.log("user");
    console.log(user);
    return{
        type: "SET_USER",
        user
    }

}
export const logout = ()=>{
    return dispatch=>{
          localStorage.clear();
          dispatch(setCurrentUser({}));
          
    }
}


export function  login(data) {
    return dispatch => {
        return axios.post("https://sudonitesh-anti-ragging.herokuapp.com/api/auth/sign_in", data).then(res =>
            {
                const token = res.data.data.token;
                localStorage.setItem('jwtToken', token);
                dispatch(setCurrentUser(jwtDecode(token)));
            }
        );
    }

    
}