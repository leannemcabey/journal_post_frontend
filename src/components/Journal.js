import React, {Component} from 'react'
import JournalPostcardContainer from '../containers/JournalPostcardContainer'
import NewPostcard from './NewPostcard'
import PostcardShow from '../containers/PostcardShow'
import {connect} from 'react-redux'
import {toggleCreatingPostcard, resetActivePostcardId} from '../actions'

class Journal extends Component {

  handleClick = () => {
    this.props.toggleCreatingPostcard()
    this.props.resetActivePostcardId()
  }

  returnToJournal = () => {
    this.props.resetActivePostcardId()
  }

  conditionalButtonRender = () => {
    if (this.props.activePostcardId) {
      return (
        <img onClick={this.returnToJournal} id='return' src={require('../images/back-arrow.svg')} alt='back-arrow' height='50px'/>
      )
    }
    else {
      return (
        <button onClick={this.handleClick} id='new-postcard-button'>Create New Postcard</button>
      )
    }
  }

  render() {
    return (
        <div>
          <div id='journal'>
            <h1>{this.props.activeJournal.title}</h1>
            {this.conditionalButtonRender()}
            <hr></hr>
          </div>
            {this.props.activePostcardId ? <PostcardShow /> : this.props.creatingPostcard ? <NewPostcard /> : <JournalPostcardContainer />}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeJournal: state.journal.journals.find(journal => journal.id === state.journal.activeJournalId),
    creatingPostcard: state.postcard.creatingPostcard,
    activePostcardId: state.postcard.postcards.find(postcard => postcard.id === state.postcard.activePostcardId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCreatingPostcard: () => dispatch(toggleCreatingPostcard()),
    resetActivePostcardId: () => dispatch(resetActivePostcardId())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal)
