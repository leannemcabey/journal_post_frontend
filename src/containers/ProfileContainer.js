import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserInfo from '../components/UserInfo'
import EditUserInfo from '../components/EditUserInfo'
import JournalIndex from '../components/JournalIndex'
import EditJournalTitle from '../components/EditJournalTitle'
import {resetShowProfile, setActiveJournalId} from '../actions'

class ProfileContainer extends Component {

  handleClick = () => {
    fetch(`http://localhost:3000/api/v1/users/${this.props.activeUserId}`)
    .then(r => r.json())
    .then(user => {
      this.props.setActiveJournalId(user.current_journal_id)
      this.props.resetShowProfile()
    })
  }

  render() {
    return (
      <div id='profile-container'>
        <img onClick={this.handleClick} className='return' src={require('../images/back-arrow.svg')} alt='back-arrow' height='50px'/>
        <div className='two-grid-container'>
          {this.props.editUser ? <EditUserInfo /> : <UserInfo />}
          {this.props.editJournalId ? <EditJournalTitle /> : <JournalIndex />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeUserId: state.user.activeUserId,
    journals: state.journal.journals,
    editUser: state.user.editUser,
    editJournalId: state.journal.editJournalId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetShowProfile: () => dispatch(resetShowProfile()),
    setActiveJournalId: (journalId) => dispatch(setActiveJournalId(journalId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
