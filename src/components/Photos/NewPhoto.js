import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addPhoto} from '../../store/actions/photosAction'
import { Redirect} from 'react-router-dom';
import {Select, option} from 'react-materialize'
 
class NewPhoto extends Component{
    constructor(props){
        super(props);
        this.state={
           albumId: 1,
           id: '',
           title: "",
           url: "",
           thumbnailUrl: ""
        }
    }
    handleChange = (e) => {
        console.log("dsvsdvsd sdasd,,,")
        this.setState({
          [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPhoto(this.state);
        this.props.history.push('/')
      }
      actionHandler = () => {
          console.log('idnin')
      }
      onChangeHandler=event=>{

        console.log(event.target.files[0])
    
    }
     
      render() {
        if(!(this.props.auth.isAuthenticated)){
            return <Redirect to="/signin" />
          }
        return(
            <div className = 'container '>
                <div className="card" >
                <div className="card-content">
                  <div className="input-field col">
                      <label htmlFor="text">Title</label>
                      <input type="text" id='url' onChange={this.handleChange} />
                  </div>
                  {/* <div>
                      <input type="file" name="file" onChange={this.onChangeHandler}/>
                  </div> */}
                  <div className="input-field col">
                      <label htmlFor="text">Url</label>
                      <input type="text" id='url' onChange={this.handleChange} />
                  </div>
                  <div className="input-field col">
                      <label htmlFor="text">thumbnailUrl</label>
                      <input type="text" id='thumbnailUrl' onChange={this.handleChange} />
                  </div>
                  <Select value="" onChange={this.actionHandler}>
                        <option value="" disabled>
                        Choose category
                        </option>
                        <option value="1">
                        Science
                        </option>
                        <option value="2">
                        Fun
                        </option>
                  </Select>
                  <button class="btn waves-effect waves-light" type="submit" onClick={this.handleSubmit} name="action">Post
                    <i class="material-icons right">send</i>
                  </button>
                  </div>
                  </div>
                  </div>
        )
    } 


}

const mapStateToProps = (state) => {
    return{
        
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getPhotos: () => dispatch(getPhotos()),
        // getComments: () => dispatch(getComments()),
        addPhoto: (img) => dispatch(addPhoto(img))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NewPhoto);