import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentEditor from './CommentEditor';
// import './CommentStyle.css';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    // Init state inside constructor
    // State is an object
    // Props is also an object
    // We could access them by: this.props.something or this.state.something
    this.state = {
      commentList: ["Comment 1", "Comment 2"],
    };
  }

  render() {
    const { commentList } = this.state;
    return (
      <div className="CommentSection">
        <p style={{ fontWeight: 'bold' }}>Comment Section</p>
        <hr />
        <CommentList commentList={commentList} />
        {/*
          We've defined addComment() and we pass the function to CommentEditor as props, we'll then call the function inside CommentEditor
        */}
        <CommentEditor addCommentFunction={this.addComment}/>
      </div>
    );
  }

  // ES6 arrow function, basically means defining a function called addComment which recieves an argument 'newComment'
  addComment = (newComment) => {
    console.log(newComment);
    // This function is to append new Object into commentList, but we can't do it this way:
    // this.state.commentList.push(newComment)
    // React docs says that we should treat this.state as it were immutable
    // so we must use this.setState whenever we want to change state
    // https://stackoverflow.com/questions/26253351/correct-modification-of-state-arrays-in-reactjs
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment], // ES6 way of adding elements to back of a list
    }))
  }
}

export default CommentSection;
