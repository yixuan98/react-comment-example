import React, { Component } from 'react';
import CommentList from './CommentList';
// import './CommentStyle.css';

class CommentSection extends Component {
  render() {
    return (
      <div className="CommentSection">
        <p>CommentSection</p>
        <hr />
        <CommentList />
      </div>
    );
  }
}

export default CommentSection;
