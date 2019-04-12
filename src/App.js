import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentSection from './CommentSection.js';

// This is the main app
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Comment and Like App</p>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* We put the CommentSection component that we've created here */}
        <CommentSection />
      </div>
    );
  }
}

export default App;
