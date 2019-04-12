import React, { Component } from 'react';
import './CommentStyle.css';

class CommentEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userComment: ""
    };
  }

  render() {
    // ES6 Object destructuring
    const { userComment } = this.state;

    return (
      <div className="CommentEditor">
        <input className="InputBox" placeholder="Add a comment..." onChange={comment => this.setComment(comment.target.value)} />
        <button className="SubmitButton" onClick={() => this.addComment(userComment)}>Add comment</button>
      </div>
    );
  }

  setComment = comment => {
    this.setState({
      userComment: comment,
    })
  }

  addComment = comment => {
    // ES6 Object Destructuring
    // Basically doing the same thing as:
    // const addCommentFunction = this.props.addCommentFunction;
    // We take the addCommentFunction out from props
    const { addCommentFunction } = this.props;

    if (comment !== "" && comment !== null) {
      // Call the addCommentFunction from CommentSection
      addCommentFunction(comment);
    }
  }
}

export default CommentEditor;