import React, {Component} from 'react'
import Signin from './Signin'
import SignUp from './SignUp'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Welcome extends Component {

  state = {
    userType: null
  }

  handleClick = (event) => {
    this.setState({
      userType: event.target.name
    })
  }

  render() {
    return (
        <div id='welcome-div'>
          <div id='welcome'>
            <h1>Welcome to JournalPost!</h1>
            <h3>A place to journal your travel experiences through custom postcards, created by you.</h3>
            <button onClick={this.handleClick} name='returning'>Returning Journaler</button>
            <button onClick={this.handleClick} name='new'>New Journaler</button>

            {this.state.userType === 'returning' ? <Signin /> : this.state.userType === 'new' ? <SignUp /> : null}

          </div>
        </div>

    )
  }
}

export default Welcome
