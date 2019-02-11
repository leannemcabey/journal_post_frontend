import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserInfo from '../components/UserInfo'
import EditUserInfo from '../components/EditUserInfo'
import JournalIndex from '../components/JournalIndex'
import EditJournalTitle from '../components/EditJournalTitle'
import {resetShowProfile} from '../actions'

class ProfileContainer extends Component {

  render() {
    return (
      <div>
        <img onClick={this.props.resetShowProfile} id='return' src={require('../images/back-arrow.svg')} alt='back-arrow' height='50px'/>
        <div className='two-grid-container'>
          {this.props.editUser ? <EditUserInfo /> : <UserInfo editUser={this.editUser}/>}
          {this.props.editJournalId ? <EditJournalTitle /> : <JournalIndex />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    journals: state.journal.journals,
    editUser: state.user.editUser,
    editJournalId: state.journal.editJournalId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetShowProfile: () => dispatch(resetShowProfile())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
