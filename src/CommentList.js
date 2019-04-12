import React, { Component } from 'react';
import Comment from './Comment';
// import './CommentStyle.css';

class CommentList extends Component {
  constructor(props) {
    super(props);
    // Init state inside constructor
    // State is an object
    this.state = {
      commentList: ["Comment 1", "Comment 2"],
    };
  }

  render() {
    return (
      <div>
        {
          // map function is something like foreach
          // Here, for each 'comment' in commentList,
          // we render a Comment component and pass in data by props ('content' is the props name,
          // 'comment' is the data we pass to Comment)
          this.state.commentList.map(comment => {
            return (
              <Comment content={comment} />
            );
          })
        }
      </div>
    );
  }

  // ES6 arrow function, basically means defining a function called addComment which recieves an argument 'newComment'
  addComment = (newComment) => {
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

export default CommentList;