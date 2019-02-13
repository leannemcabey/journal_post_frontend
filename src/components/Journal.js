import React, {Component} from 'react'
import JournalPostcardContainer from '../containers/JournalPostcardContainer'
import NewPostcard from './NewPostcard'
import PostcardShow from '../containers/PostcardShow'
import {connect} from 'react-redux'
import {toggleCreatingPostcard, setActiveJournalId, resetActivePostcardId} from '../actions'

class Journal extends Component {

  handleClick = () => {
    this.props.toggleCreatingPostcard()
    this.props.resetActivePostcardId()
  }

  returnToJournal = () => {
    fetch(`http://localhost:3000/api/v1/users/${this.props.activeUserId}`)
    .then( r => r.json() )
    .then( user => {
      this.props.setActiveJournalId(user.current_journal_id)
      this.props.resetActivePostcardId()
    })
  }

  conditionalButtonRender = () => {
    if (this.props.activePostcardId) {
      return <img onClick={this.returnToJournal} className='return' src={require('../images/back-arrow.svg')} alt='back-arrow' height='50px'/>
    }
    else {
      return <button onClick={this.handleClick} id='new-postcard-button'>Create New Postcard</button>
    }
  }

  render() {
    return (
      <div>
        <div id='journal'>
          <h1>{this.props.activeJournal.title}</h1>
          {this.conditionalButtonRender()}
        </div>
        {this.props.activePostcardId ? <PostcardShow /> : this.props.creatingPostcard ? <NewPostcard /> : <JournalPostcardContainer />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeUserId: state.user.activeUserId,
    activeJournal: state.journal.journals.find(journal => journal.id === state.journal.activeJournalId),
    creatingPostcard: state.postcard.creatingPostcard,
    activePostcardId: state.postcard.postcards.find(postcard => postcard.id === state.postcard.activePostcardId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCreatingPostcard: () => dispatch(toggleCreatingPostcard()),
    setActiveJournalId: (journalId) => dispatch(setActiveJournalId(journalId)),
    resetActivePostcardId: () => dispatch(resetActivePostcardId())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal)
