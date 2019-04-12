import React, { Component } from 'react';
import LikeButton from './thumbs-up.svg'
import './CommentStyle.css';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  switchLikeState = () => {
    // This function sets 'liked' to false when it is true, and sets it to true when it's false
    this.setState(prevState => ({
      liked: !prevState.liked,
    }))
  }

  render() {
    return (
      <div>
        <div className="CommentContainer">
          <div className="Comment">{this.props.content}</div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/*
              Ternary operator for ES6:
              condition ? whenTrue : whenFalse
              We need to put code below inside curly braces because we're using Javascript inside HTML (JSX)
            */}
            {this.state.liked ? <p>Liked</p> : <p>Like Please</p>}
            <input className="LikeButton" type="image" src={LikeButton} alt="like" onClick={() => this.switchLikeState()} />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

// For every class we need to export it so that we could use it in other classes
export default Comment;
