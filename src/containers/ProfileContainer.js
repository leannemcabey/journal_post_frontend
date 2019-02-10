import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserInfo from '../components/UserInfo'
import EditUserInfo from '../components/EditUserInfo'
import JournalIndex from '../components/JournalIndex'
import EditJournalTitle from '../components/EditJournalTitle'

class ProfileContainer extends Component {

  render() {
    return (
      <div>
        <img onClick={this.props.resetShowProfile} id='return' src='https://image.flaticon.com/icons/svg/9/9895.svg' alt='back-arrow' height='50px'/>
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
    journals: state.journals,
    editUser: state.editUser,
    editJournalId: state.editJournalId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetShowProfile: () => dispatch({type: 'RESET_SHOW_PROFILE'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
