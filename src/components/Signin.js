import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setActiveUserData, updateJournals, updatePostcards, setActiveJournalId} from '../actions'

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
    .then(r => r.json())
    .then(users => {
      let user = users.find(user => user.username === state.username)

      if (user && state.password === user.password) {
        this.props.updateJournals(user.journals)
        this.props.updatePostcards(user.postcards)
        this.props.setActiveJournalId(user.current_journal_id)
        this.props.setActiveUserData(user)
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
    setActiveUserData: (user) => dispatch(setActiveUserData(user)),
    updateJournals: (journals) => dispatch(updateJournals(journals)),
    updatePostcards: (postcards) => dispatch(updatePostcards(postcards)),
    setActiveJournalId: (journalId) => dispatch(setActiveJournalId(journalId))
  }
}

export default connect(null, mapDispatchToProps)(Signin)
