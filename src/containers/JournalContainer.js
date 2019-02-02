import React, {Component} from 'react'
import NewJournal from '../components/NewJournal'
import Journal from '../components/Journal'
// import JournalIndex from '../components/JournalIndex'
import PostcardShow from './PostcardShow'
import {connect} from 'react-redux'

class JournalContainer extends Component {
  render() {
    return (
        <div className="grid-item" id='journal-container'>
          {this.props.activePostcardId ? <PostcardShow postcard={this.props.activePostcardId}/> : this.props.activeJournalId ? <Journal /> : <NewJournal />}
          {/* <JournalIndex /> */}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeJournalId: state.activeJournalId,
    activePostcardId: state.postcards.find(postcard => postcard.id === state.activePostcardId)
  }
}

export default connect(mapStateToProps)(JournalContainer)
