import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {setActiveUserData, setActiveJournalId} from '../actions'

class Signin extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  signIn = (event, state) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users')
    .then( r => r.json() )
    .then( users => {
      let user = users.find(user => user.username === state.username)
      if (user && user.password === state.password) {
        this.props.sendActiveUserDataToStore(user)
        this.props.setActiveJournalId(user.current_journal_id)
      }
      else {
        this.setState({
          username: '',
          password: ''
        })
        alert('Incorrect username or password')
      }
    })
  }

  render() {
    return (
      <form onSubmit={(event) => this.signIn(event, this.state)}>
        <input onChange={this.handleChange} placeholder='Username' name='username' type='text' value={this.state.username}></input><br></br>
        <input onChange={this.handleChange} placeholder='Password' name='password' type='password' value={this.state.password}></input><br></br>
        <button type='submit'>Sign In</button>
      </form>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    sendActiveUserDataToStore: (user) => dispatch(setActiveUserData(user)),
    setActiveJournalId: (journalId) => dispatch(setActiveJournalId(journalId))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Signin))
