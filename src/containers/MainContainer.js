import React, { Component } from 'react';
import '../App.css';
import MemoryLaneContainer from '../containers/MemoryLaneContainer'
import JournalContainer from '../containers/JournalContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import history from '../BrowserHistory'

class MainContainer extends Component {

  render() {
    return (
      <div className="grid-container">
        <MemoryLaneContainer />
        <JournalContainer />
      </div>
    )
  }
}

export default MainContainer
