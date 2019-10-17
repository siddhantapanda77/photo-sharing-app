import React,{Component} from 'react';  
import { connect } from 'react-redux'; 
import NewComment from './NewComment';
import { Redirect} from 'react-router-dom';


class Comments extends Component { 
  render() {  
    console.log('This is COMMENTS')
        // console.log(this.props);
        console.log(this.props.comment.comment)
        const { comment } = this.props.comment
        console.log("Only comment")
        console.log(comment.length)
        if(!(this.props.auth.isAuthenticated)){
          return <Redirect to="/signin" />
        }
        const commentList = comment.length ? (
            comment.map(co => {
              // console.log("this.props.match.params.photo_id")
              // console.log(this.props.match.params.photo_id)
              // if(co.postId == this.props.match.params.photo_id)
              if(co.postId == this.props.idc)
              {
                
              //   console.log("co.postId")
              // console.log(co.postId)
              return (
             <div className="post card z-depth-1" key={co.id}>

                  
                  <div className="card-content">
                  <p>{co.name} :-{co.body}</p>
                    {/* <Link to={'/comments/' + photo.id}>
                      <span className="card-title red-text">{photo.title}</span>
                      <img src={photo.url}/>
                    </Link> */}
                  </div>
                </div>
              )
            }
            })
          ) : (
            <div className="center">No comments to show</div>
          );
      
          return (
            <div>
              <div className="container home">
                {commentList}
              </div>
              <NewComment idc = {this.props.idc} name={this.user}/>
            </div>
          )
     }  
}  

const mapStateToProps = (state, ownProps) => {
    // let id = ownProps.match.params.photo_id;
    // console.log(id)
    console.log(state.comment.comment)
    return {
      comment: state.comment,
      auth: state.auth
    }
  }


export default connect(mapStateToProps)(Comments)
