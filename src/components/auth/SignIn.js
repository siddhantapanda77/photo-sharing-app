import React, { Component} from 'react'
import {login} from '../../store/actions/authAction'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange=this.handleChange.bind(this);

  }
  handleChange =(e)=>{
      this.setState({[e.target.id]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  }

    render() {
      if(this.props.auth.isAuthenticated){
        return <Redirect to='/'/>
      }
        return ( 
            <div className=" row " style={{margin:"5% auto", display: "inline-block"}}>
            <div className="card col">
            <h3 className="card-title" style={{fontWeight: "bold"}}>Nice to see you here!!</h3>
            <div className="card-content">
            <form className="black-text" onSubmit={this.handleSubmit}>
              <div className="input-field">
                <label className="black-text" htmlFor="email">Email</label>
                <input type="email" className="black-text" id='email' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label className="black-text" htmlFor="password">Password</label>
                <input type="password" className="black-text" id='password' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <button className="btn indigo darken-3 lighten-1 z-depth-0">Login</button>
                {/* <div className="center red-text">
                  { authError ? <p>{authError}</p> : null }
                </div> */}
              </div>
            </form>
            </div>
          </div>
         </div> 
        );
    }
}

const mapStatetoProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      login: (d) => dispatch(login(d))
    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(SignIn)