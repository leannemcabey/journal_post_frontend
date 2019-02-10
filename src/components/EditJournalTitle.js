import React, {Component} from 'react'
import {connect} from 'react-redux'

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
      this.props.updateJournal(journalsCopy)
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
              <img onClick={this.saveJournal} src='https://freeiconshop.com/wp-content/uploads/edd/checkmark-circle-outline.png' alt='save' className='save-button' height='30px'/>
              <img onClick={this.props.resetEditJournalId} src='https://image.flaticon.com/icons/svg/69/69381.svg' alt='back' className='save-button' height='30px'/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    journals: state.journals,
    editJournal: state.journals.find(journal => journal.id === state.editJournalId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateJournal: (journalsCopy) => dispatch({type: 'UPDATE_JOURNAL', payload: journalsCopy}),
    resetEditJournalId: () => dispatch({type: 'RESET_EDIT_JOURNAL_ID'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditJournalTitle)
