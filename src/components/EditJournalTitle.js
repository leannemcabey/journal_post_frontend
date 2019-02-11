import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateJournals, resetEditJournalId} from '../actions'

class EditJournalTitle extends Component {

  state = {
    journalTitle: this.props.editJournal.title
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  saveJournal = (event) => {
    fetch(`http://localhost:3000/api/v1/journals/${this.props.editJournal.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.journalTitle
      })
    })
    .then(response => response.json())
    .then(updatedJournal => {
      let journalsCopy = []
      this.props.journals.forEach(journal => journalsCopy.push({...journal}))

      let index = journalsCopy.findIndex(journal => journal.id === updatedJournal.id)
      journalsCopy[index].title = updatedJournal.title
      this.props.updateJournals(journalsCopy)
      this.props.resetEditJournalId()
    })
  }

  render() {
    return (
      <div>
        <h2>My Journals</h2>
        <div className='profile'>
          <div className='journal-index'>
            <form>
              New Title:<br></br>
              <input onChange={this.handleChange} name='journalTitle' value={this.state.journalTitle} placeholder={this.state.journalTitle}></input>
              <img onClick={this.saveJournal} src={require('../images/checkmark.png')} alt='save' className='save-button' height='30px'/>
              <img onClick={this.props.resetEditJournalId} src={require('../images/X.svg')} alt='back' className='back-button' height='30px'/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    journals: state.journal.journals,
    editJournal: state.journal.journals.find(journal => journal.id === state.journal.editJournalId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateJournals: (journals) => dispatch(updateJournals(journals)),
    resetEditJournalId: () => dispatch(resetEditJournalId())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditJournalTitle)
