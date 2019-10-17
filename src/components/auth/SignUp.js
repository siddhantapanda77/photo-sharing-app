import React, {Component} from 'react'

class SignOut extends Component{
    render() {
        return (            
            <div className="row" style={{margin:"4% auto", display: "inline-block"}}>
            <div className="card col" style={{backgroundImage: `url("./auth.jpg")`, backgroundSize: "cover"}}>
            <h2 className="card-title" style={{fontWeight: "bold"}}>Signup here</h2>
            <div className="card-content">
            <form className="blue lighten-4" onSubmit={this.handleSubmit}>
              <div className="input-field">
                <label htmlFor="text">Name</label>
                <input type="text" id='name' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" id='password' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <button className="btn indigo darken-3 lighten-1 z-depth-0">Sign Up</button>
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

export default SignOut;