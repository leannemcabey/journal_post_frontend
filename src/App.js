import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import MemoryLaneContainer from './containers/MemoryLaneContainer'
import JournalContainer from './containers/JournalContainer'
import NewPostcard from './components/NewPostcard'
import PostcardShow from './components/PostcardShow'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Welcome />
        <MemoryLaneContainer />
        <JournalContainer />
        <NewPostcard />
        <PostcardShow />
      </div>
    );
  }
}

export default App;
