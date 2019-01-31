import React, {Component} from 'react'
import {connect} from 'react-redux'

class NewJournal extends Component {

  state = {
    title: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/journals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.activeUserId,
        title: this.state.title,
        current_journal: 1
      })
    })
    .then(r => r.json())
    .then(
      journal => {
        this.props.createNewJournal(journal)
        fetch(`http://localhost:3000/api/v1/users/${this.props.activeUserId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            current_journal: journal.id
          })
        })
      }
    )
  }

  render() {
    return (
        <form onSubmit={(event, state) => this.handleSubmit(event, state)}>
          <h2>Get started by titling your new journal:</h2>
          <input onChange={this.handleChange} type='text' value={this.props.title} name='title'></input>
          <button type='submit'>Save</button>
        </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeUserId: state.activeUserId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewJournal: (journal) => dispatch({type: 'CREATE_NEW_JOURNAL', payload: journal})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewJournal)
