import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../store/actions/authAction'
import {Dropdown, Divider, SideNavItem, Button} from 'react-materialize'

class SignedInLinks extends Component{
    render(){
    return (
        <ul id="nav-mobile" className="right">
            
            <li>
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
            </li>
            <li ><NavLink to='/users'>Users</NavLink></li>
            <li ><NavLink to='/'>Photos</NavLink></li>
            <li ><NavLink to='/addphoto'>Add Photo</NavLink></li> 
            <li><NavLink to='/signin' onClick={()=> {this.props.logout()}}>Logout</NavLink></li>
          </ul>
    )
 }
}

const mapStateToProps =(state) => {
    return{
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => dispatch(logout())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks);
