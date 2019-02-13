import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createNewJournal, setActiveJournalId} from '../actions'

class NewJournal extends Component {

  state = {
    title: ''
  }

  returnToJournal = () => {
    fetch(`http://localhost:3000/api/v1/users/${this.props.activeUserId}`)
    .then( r => r.json() )
    .then( user => this.props.setActiveJournalId(user.current_journal_id) )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.title === '') {
      alert('Please give your journal a title!')
    }
    else {
      fetch('http://localhost:3000/api/v1/journals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          user_id: this.props.activeUserId,
          title: this.state.title
        })
      })
      .then(r => r.json())
      .then(journal => {
        this.props.createNewJournal(journal)
        this.props.setActiveJournalId(journal.id)

        fetch(`http://localhost:3000/api/v1/users/${this.props.activeUserId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            current_journal_id: journal.id
          })
        })
      })
    }
  }

  render() {
    return (
        <div id='new-journal'>
          <img onClick={this.returnToJournal} className='return' src={require('../images/back-arrow.svg')} alt='back-arrow' height='50px'/>
          <div className='create-form'>
            <h2>Get started by titling your new journal:</h2>
            <form onSubmit={(event, state) => this.handleSubmit(event, state)}>
              <input onChange={this.handleChange} type='text' maxLength='25' value={this.props.title} name='title'></input>
              <button type='submit'>Save</button>
            </form>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeUserId: state.user.activeUserId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewJournal: (journal) => dispatch(createNewJournal(journal)),
    setActiveJournalId: (journalId) => dispatch(setActiveJournalId(journalId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewJournal)
