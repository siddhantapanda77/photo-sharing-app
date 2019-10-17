import React,{ Component } from 'react'
import { connect } from 'react-redux';
import  {addComment} from '../../store/actions/commentsAction'

class NewComment extends Component{

  constructor(props){
    super(props);
    this.state = {
      postId: this.props.idc,
      id: '',
      name: "Siddhanta",
      email: "Eliseo@gardner.biz",
      body: ""
    }

  }   

    handleChange = (e) => {
        console.log("Yop kjsxjhasb")
        this.setState({
          [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state);
      }
    render() {
        return(
            <div className ='container'>
              <form onSubmit={this.handleSubmit} className = 'row'>
                  <div className="input-field col s12 m10 l10">
                  <i className="material-icons prefix">mode_edit</i>
                      <label htmlFor="text">Your thoughts</label>
                      <input type="text" id='body' onChange={this.handleChange} />
                  </div>
                  <div className="center s12">
                  <button className="btn center waves-effect waves-light col s4 m2 l2" type="submit"  name="action">Post
                    <i className="material-icons right">send</i>
                  </button>
                  </div>
                  </form>
                  </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (com) => dispatch(addComment(com))
    }
  }

export default connect(null, mapDispatchToProps)(NewComment)