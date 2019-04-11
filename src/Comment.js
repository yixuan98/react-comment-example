import React, { Component } from 'react';
import LikeButton from './thumbs-up.svg'
// import './CommentStyle.css';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  render() {
    return (
      <div>
        <div style={{ flexDirection: 'row' }}>
          <div className="Comment">{this.props.content}</div>
          <img className="LikeButton" src={LikeButton} alt="like" />
        </div>
        <hr style={{ borderWidth: 1 }} />
      </div>
    );
  }
}

export default Comment;