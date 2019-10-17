import React, { Component} from 'react'
import {connect} from 'react-redux'
import { Redirect} from 'react-router-dom'
import {Preloader} from 'react-materialize'



class UserMatrix extends Component{
    // state = {
    //     users: []
    // }
    
   

    render() {
        console.log("Here is component");
        console.log(this.props.users);
        const {users} = this.props;
        console.log("Users")
        console.log(users.length);
        if(!(this.props.auth.isAuthenticated)){
          return <Redirect to="/signin" />
        }
        if(users.length!=0){
          return(
            <div className= "row">
                
                {
                  
                    users.map(user => <div className="container col s12  m3 l4" >
                      <div className= "card">
                      <div className="card-content">
                            <img style={{borderRadius: '68%',  
                                                            width: '28%', 
                                                            border: '2px solid brown'}} src={"https://image.shutterstock.com/image-photo/portrait-happy-fashionable-handsome-man-260nw-600200732.jpg"}/>                        
                          
                      <ul>
                        <li key = {user.id}>{user.name}</li>
                        <li key = {user.id}>{user.email}</li>
                        <div className="card-action ">
                        <button className="btn">View profile</button>
                        </div>
                      </ul>
                      </div>
                      </div>
                    </div>)
                }
              
            </div>
          )
        }
        else{
          return(
            <div className="center">
                <Preloader flashing />
            </div>)
          }
        
        
    }
}

const mapStateToProps = (state) =>{
    console.log("Map")
    console.log(state.users)
    return {
        users: state.users.users,
        auth: state.auth
    }
    
}



export default connect(mapStateToProps)(UserMatrix)