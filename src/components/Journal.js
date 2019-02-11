import React, {Component} from 'react'
import JournalPostcardContainer from '../containers/JournalPostcardContainer'
import NewPostcard from './NewPostcard'
import {connect} from 'react-redux'
import {toggleCreatingPostcard, resetActivePostcardId} from '../actions'

class Journal extends Component {

  handleClick = () => {
    this.props.toggleCreatingPostcard()
    this.props.resetActivePostcardId()
  }

  render() {
    return (
        <div>
          <div id='journal'>
            <h1>{this.props.activeJournal.title}</h1>
            <button onClick={this.handleClick} id='new-postcard-button'>Create New Postcard</button>
            <hr></hr>
          </div>
          {!this.props.creatingPostcard ? <JournalPostcardContainer activeJournal={this.props.activeJournal}/> : <NewPostcard />}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeJournal: state.user.journals.find(journal => journal.id === state.journal.activeJournalId),
    creatingPostcard: state.postcard.creatingPostcard
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCreatingPostcard: () => dispatch(toggleCreatingPostcard()),
    resetActivePostcardId: () => dispatch(resetActivePostcardId())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal)
