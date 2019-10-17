import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Modal, Button, Row, Col, Preloader} from 'react-materialize';

import NewComment from './NewComment';
import getUsers from '../../store/actions/usersActions'
import {getPhotos} from '../../store/actions/photosAction'
import {getComments} from '../../store/actions/commentsAction'
import Comments from './comments';


class PhotoMatrix extends Component {

  componentWillMount(){
    if(this.props.auth.isAuthenticated)
      { 
       this.props.getUsers();
       this.props.getPhotos();
       this.props.getComments();
     }
     else {
       console.log("Login first");
     }
   }
 
    render() {
        console.log('This is photos')
        console.log(this.props.photos);
        const { photos } = this.props;
        if(!(this.props.auth.isAuthenticated)){
          return <Redirect to="/signin" />
        }
        const photoList = photos.length ? (
            photos.reverse().map(photo => {
              return (
            <div className="row">
             <div className="post card col s12 " key={photo.id}>
                 <p>{photo.title}</p>
                  <div className="card-content">
                      <span className="card-title red-text truncate">{photo.title}</span>
                      <img src={photo.url} style={{height: 'auto',width: '100%',maxWidth: '720px'}}/>
                  </div>
                  <Modal header="Thoughts" trigger={<Button>Check what others think</Button>}>
                    <Comments idc={photo.id}/>
                    </Modal>
                  <NewComment idc={photo.id} name={this.props.auth.user.name}/>
                </div>
                </div>
              )
            })
          ) : (
            <div className="center">
                <Preloader flashing />
            </div>
          );
      
          return (
            <div>
              <div className="container">
                <h4 className="center">Home</h4>
                {photoList}
              </div>
            </div>
          )
    // return(
    //     <ul>{photos.map(photo => 
    //         <img src = {photo.url}/>
    //         )}</ul>
    // )
}
}

const mapStateToProps = (state) => {
    return{
        photos: state.photos.photos,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getPhotos: () => dispatch(getPhotos()),
      getComments: () => dispatch(getComments()),
      getUsers: () => dispatch(getUsers())
      // addComment: (com) => dispatch(addComment(com))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PhotoMatrix)
