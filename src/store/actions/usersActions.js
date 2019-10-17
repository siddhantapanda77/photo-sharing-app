import axios from 'axios'

// var users = []
// axios.get('https://jsonplaceholder.typicode.com/users').then(
//     res => {
//         users = res.data;
//     }
// )

const getUsers = () => {
    return(dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=> {
            // console.log("res.data")
            // console.log(res.data)
            dispatch({ type: 'GET_USERS', payload: res.data});
        })
   
        
    }
  }

//   const getUsers = () => {
//     return(
//         { type: 'GET_USERS', payload: users}
//     );
//   }

export default getUsers