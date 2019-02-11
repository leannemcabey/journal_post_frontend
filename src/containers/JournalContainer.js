import React, {Component} from 'react'
import NewJournal from '../components/NewJournal'
import Journal from '../components/Journal'
import ProfileContainer from '../containers/ProfileContainer'
import PostcardShow from './PostcardShow'
import {connect} from 'react-redux'

class JournalContainer extends Component {
  render() {
    return (
        <div className="grid-item" id='journal-container'>
          {this.props.activePostcardId ? <PostcardShow postcard={this.props.activePostcardId}/> : this.props.showProfile ?  <ProfileContainer /> : this.props.activeJournalId ? <Journal /> : <NewJournal />}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeJournalId: state.journal.activeJournalId,
    activePostcardId: state.user.postcards.find(postcard => postcard.id === state.postcard.activePostcardId),
    showProfile: state.user.showProfile
  }
}

export default connect(mapStateToProps)(JournalContainer)
