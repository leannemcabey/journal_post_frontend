import React, {Component} from 'react'
import JournalPostcardContainer from '../containers/JournalPostcardContainer'
import NewPostcard from './NewPostcard'
import {connect} from 'react-redux'

class Journal extends Component {

  state = {
    creatingPostcard: null
  }

  handleClick = () => {
    this.setState({
      creatingPostcard: true
    })
  }

  render() {
    return (
        <div>
          <div id='current-journal-label'>Current Journal</div>
          <div id='journal'>
            <h1>{this.props.activeJournal.title}</h1>
            <button onClick={this.handleClick}>Create New Postcard</button>
            <button>Close Trip</button>
            <hr></hr>
          </div>
          {!this.state.creatingPostcard ? <JournalPostcardContainer activeJournal={this.props.activeJournal}/> : <NewPostcard />}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeJournal: state.journals.find(journal => journal.id === state.activeJournalId)
  }
}

export default connect(mapStateToProps)(Journal)
