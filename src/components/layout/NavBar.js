import React,{ Component } from 'react'
import {connect} from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {NavLink} from 'react-router-dom'
import { SideNav, SideNavItem,Divider, Dropdown, Button, Icon} from 'react-materialize'


class NavBar extends Component {
    render(){
     const links = (this.props.auth.isAuthenticated)?<li><SignedInLinks/></li>:<li><SignedOutLinks/></li> 
      return(
        <div>  
    <nav>
    <div className=" hide-on-medium-and-up">
    {(this.props.auth.isAuthenticated)?<div className=" right hide-on-medium-and-up">
                  
                  <SideNav trigger={<Button flat className=" right hide-on-medium-and-up"><Icon className="white-text">dehaze</Icon></Button>} options={{closeOnClick: false}}>
                  <SideNavItem>
                        <NavLink className='black-text' to='/users'>Users</NavLink>
                  </SideNavItem>
                  <SideNavItem divider/>
                  <SideNavItem>
                        <NavLink className='black-text' to='/'>Photos</NavLink>
                  </SideNavItem>
                  <SideNavItem divider/>
                  <SideNavItem>
                        <NavLink className='black-text' to='/addphoto'>Add Photo</NavLink>
                  </SideNavItem>
                  <SideNavItem>
                  <Dropdown trigger={<Button >Categories</Button>}>
                    <a href="#">
                    All
                    </a>
                    <Divider/>
                    <a href="#" >                    
                    Science
                    </a>
                    <Divider/>
                    <a href="#">                  
                    Fun
                    </a>
                  </Dropdown>
                  </SideNavItem>
                  <SideNavItem divider/>
                  <SideNavItem>
                        <NavLink className='black-text' to='/signin' onClick={()=> {this.props.logout()}}>Logout</NavLink>   
                  </SideNavItem>
                  </SideNav>
                  </div>:null}
                  </div>
              <div className="nav-wrapper teal darken-3">
                <a href="#!" className="brand-logo" style={{left: "74px"}}>Patterns</a>
                <ul className={!(this.props.auth.isAuthenticated)?"right":"right hide-on-med-and-down"}>
                  {links}
                </ul>
              </div>
            </nav> 
         </div>              

    );
}
}
const mapStateToProps = (state) => {
  return{
      
      auth: state.auth
  }
}

export default connect(mapStateToProps)(NavBar);






