import React, {Component} from 'react'
import JournalPostcardContainer from '../containers/JournalPostcardContainer'
import NewPostcard from './NewPostcard'
import {connect} from 'react-redux'

class Journal extends Component {

  handleClick = () => {
    this.props.changeCreatingPostcard()
  }

  render() {
    return (
        <div>
          <div id='journal'>
            <h1>{this.props.activeJournal.title}</h1>
            <button onClick={this.handleClick}>Create New Postcard</button>
            <button>Close Trip</button>
            <hr></hr>
          </div>
          {!this.props.creatingPostcard ? <JournalPostcardContainer activeJournal={this.props.activeJournal}/> : <NewPostcard />}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeJournal: state.journals.find(journal => journal.id === state.activeJournalId),
    creatingPostcard: state.creatingPostcard
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCreatingPostcard: () => dispatch({type: 'CHANGE_CREATING_POSTCARD'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journal)
