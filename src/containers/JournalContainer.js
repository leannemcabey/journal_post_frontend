import React, {Component} from 'react'
import NewJournal from '../components/NewJournal'
import Journal from '../components/Journal'
import ProfileContainer from '../containers/ProfileContainer'
import {connect} from 'react-redux'

class JournalContainer extends Component {
  render() {
    return (
      <div id='journal-container'>
        {this.props.showProfile ?  <ProfileContainer /> : this.props.activeJournalId ? <Journal /> : <NewJournal />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeJournalId: state.journal.activeJournalId,
    showProfile: state.user.showProfile
  }
}

export default connect(mapStateToProps)(JournalContainer)
