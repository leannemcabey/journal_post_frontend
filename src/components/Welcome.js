import React, {Component} from 'react'
import Signin from './Signin'
import SignUp from './SignUp'
import {connect} from 'react-redux'

class Welcome extends Component {

  state = {
    userType: null
  }

  componentDidMount() {
    this.props.clearStore()
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

const mapDispatchToProps = (dispatch) => {
  return ({
    clearStore: () => dispatch({type: 'CLEAR_STORE'})
  })
}

export default connect(null, mapDispatchToProps)(Welcome)
