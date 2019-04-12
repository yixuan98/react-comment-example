import React, { Component } from 'react';
import Comment from './Comment';
// import './CommentStyle.css';

class CommentList extends Component {
  render() {
    // ES6 Object destructuring
    // Recieved commentList from CommentSection
    const { commentList } = this.props;
    return (
      <div>
        {
          // map function is something like foreach
          // Here, for each 'comment' in commentList,
          // we render a Comment component and pass in data by props ('content' is the props name,
          // 'comment' is the data we pass to Comment)
          commentList.map(comment => {
            return (
              <Comment content={comment} />
            );
          })
        }
      </div>
    );
  }
}

export default CommentList;