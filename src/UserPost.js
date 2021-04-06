import React, { Component } from "react";
import { connect } from 'react-redux'
import { FcLike } from "react-icons/fc";
import { IoChatbubbleOutline } from 'react-icons/io5'
import { SiFlattr } from "react-icons/si";
import { FcEmptyTrash } from 'react-icons/fc';  
import store from "./store";
import './index.css'
import { likePost,addComment,deleteComment } from "./actions/actionCreator";



class UserPost extends Component {
  state = { comment: "" };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    store.dispatch(addComment(this.state.comment));
   
  }

  handleInputChange = (property) => {
    return (e) => {
      this.setState({
        [property]: e.target.value,
      });
    };
  };

  

  render() {

    const displayComments = Array.from(this.props.comments).map(comment => (
      <div className="comment" key={comment.id}>
        <img src="https://static.thenounproject.com/png/2416938-200.png" alt="profile-pic" className="profile-icon"></img>
        <p className="text"><strong>faina</strong> : {comment.commentData} &nbsp;
        <FcEmptyTrash className="delete_icon" onClick={() => store.dispatch(deleteComment(comment.id))}></FcEmptyTrash>
        </p>
    </div>
    ))


    return (
      <div>
        <h1> React Social App</h1>
        <div className="main">

          <div className="post">

            <div className="post-image">
              <img src="https://www.wellandgood.com/wp-content/uploads/2020/04/GettyImages-1213338960.jpg" alt="post-img"></img>
            </div>

            <div className="post-data">
              <div className="figure-caption">
              <img src="https://static.thenounproject.com/png/2416938-200.png" alt="profile-pic" className="profile-icon"></img>
              <p className="text"><strong>faina</strong> :  This is the best exercise,according to trainee <br /><i>6h ago</i></p>
              </div>

              <div className="plus_icon">
                <SiFlattr className="load_icon" />
              </div>
              <div className="comments">
              {displayComments}
              </div>

              <div className="like-comment-details">
                <div className="like-comment-section">
                  <FcLike className="icons" onClick={() => store.dispatch(likePost())} />&nbsp; <IoChatbubbleOutline className="icons" />
                  <p className="stats_text"><strong> {this.props.likes} Likes | {this.props.comments.length} Comments</strong></p>
                  </div>
              </div>
              <div className="add-comment">
                <form className="form" onSubmit={this.onSubmit}>
                  <div>
                    <input className ="comment_input"
                      type="text"
                      placeholder="Add comment..."
                      name="addComment"
                      onChange={this.handleInputChange("comment")}
                      value={this.state.comment}
                    />
                    <button className="post_button" type="submit">Post</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({ comments: state.reducer.comments, likes: state.reducer.likes})

export default connect(mapStateToProps, {addComment})(UserPost);
