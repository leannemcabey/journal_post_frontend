import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import MainContainer from './containers/MainContainer'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {

  render() {
    return (
        <div id='app'>
          <Nav />
          <Router>
            <div>
              {this.props.activeUserId ? <Redirect to='/home' /> : <Redirect to='/welcome' />}
              <Route path='/home' component={MainContainer}/>
              <Route exact path='/welcome' component={Welcome}/>
            </div>
          </Router>
          <footer>© Copyright 2019 JournalPost</footer>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeUserId: state.user.activeUserId
  }
}

export default connect(mapStateToProps)(App)
