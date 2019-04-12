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
    console.log("HI", this.state.liked);
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
              We need to put code below inside curly braces because we're using Javascript inside HTML
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

export default Comment;