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
    const { addComment } = this.props;
    if (comment !== "" && comment !== null) {
      addComment(comment);
    }
  }
}

export default CommentEditor;