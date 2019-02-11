import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logout, setShowProfile, resetShowProfile, resetActivePostcardId, resetCreatingPostcard, resetActiveJournalId} from '../actions'

class Nav extends Component {

  handleShowProfileClick = () => {
    this.props.setShowProfile()
    this.props.resetActivePostcardId()
    this.props.resetCreatingPostcard()
  }

  handleNewJournalClick = () => {
    this.props.resetActiveJournalId()
    this.props.resetActivePostcardId()
    this.props.resetShowProfile()
    this.props.resetCreatingPostcard()
  }

  render() {
    return (
        <nav className='nav'>
          <img src={require('../images/journal-post-stamp.png')} alt='logo'  height='70px' width='90px'/>
          {this.props.activeUserId ?
            <span className='directory'>
              <span onClick={this.handleNewJournalClick}>New Journal</span>
              <span onClick={this.handleShowProfileClick}>My Profile</span>
              <span onClick={this.props.logout}>Log Out</span>
            </span>
          : null }
        </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeUserId: state.user.activeUserId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    setShowProfile: () => dispatch(setShowProfile()),
    resetShowProfile: () => dispatch(resetShowProfile()),
    resetActivePostcardId: () => dispatch(resetActivePostcardId()),
    resetCreatingPostcard: () => dispatch(resetCreatingPostcard()),
    resetActiveJournalId: () => dispatch(resetActiveJournalId())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
