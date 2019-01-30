import React, {Component} from 'react'
import Signin from './Signin'

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to JournalPost!</h1>
        <h3>A place to journal your travel experiences through custom postcards, created by you.</h3>
        <button>Returning Journaler</button>
        <button>New Journaler</button>
        <Signin />
      </div>
    )
  }
}

export default Welcome
