import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import MemoryLaneContainer from './containers/MemoryLaneContainer'
import JournalContainer from './containers/JournalContainer'
import {connect} from 'react-redux'

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        {!this.props.activeUserId ? <Welcome /> :
          <div className="grid-container">
            <MemoryLaneContainer />
            <JournalContainer />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeUserId: state.activeUserId
  }
}

export default connect(mapStateToProps)(App)
