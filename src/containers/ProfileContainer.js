import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserInfo from '../components/UserInfo'
import EditUserInfo from '../components/EditUserInfo'
import JournalIndex from '../components/JournalIndex'
import EditJournalTitle from '../components/EditJournalTitle'

class ProfileContainer extends Component {

  editUser = () => {
    this.setState({editingUser: true})
  }

  editJournal = (journal) => {
    this.setState({editingJournal: journal})
  }

  render() {
    return (
      <div>
        <img onClick={this.props.resetShowProfile} id='return' src='https://image.flaticon.com/icons/svg/9/9895.svg' alt='back-arrow' height='50px'/>
        <div className='two-grid-container'>
          {this.state.editingUser ? <EditUserInfo /> : <UserInfo editUser={this.editUser}/>}
          {this.state.editingJournal ? <EditJournalTitle journal={this.state.editingJournal}/> : <JournalIndex editJournal={this.editJournal}/>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    journals: state.journals,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetShowProfile: () => dispatch({type: 'RESET_SHOW_PROFILE'}),
    setEditJournalId: (journalId) => dispatch({type: 'SET_EDIT_JOURNAL_ID', payload: journalId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
