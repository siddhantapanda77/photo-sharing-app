import React, { Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import UserMatrix from './components/UserMatrix/Users'
import {connect} from 'react-redux'

import NavBar from './components/layout/NavBar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import PhotoMatrix from './components/Photos/PhotoMatrix';
// import getUsers from './store/actions/usersActions'
// import getPhotos from './store/actions/photosAction'
// import {getComments} from './store/actions/commentsAction'
import NewPhoto from './components/Photos/NewPhoto'

class App extends Component {

   
 render(){
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar />
          <Switch>
            {/* <Route exact path='/'component={Dashboard} /> */}
            {/* <Route path='/project/:id' component={ProjectDetails} /> */}
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/users' component={UserMatrix} />
            <Route exact path='/' component={PhotoMatrix} />
            <Route path='/addphoto' component={NewPhoto} />
          </Switch>
        </div>
    </BrowserRouter>
    
  );
 }
}


const mapStatetoProps = (state) => {
  return {
    auth: state.auth
  }
}




export default connect(mapStatetoProps)(App)