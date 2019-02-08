import React, {Component} from 'react'
import {connect} from 'react-redux'

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
    activeUserId: state.activeUserId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({type: 'LOGOUT'}),
    setShowProfile: () => dispatch({type: 'SET_SHOW_PROFILE'}),
    resetShowProfile: () => dispatch({type: 'RESET_SHOW_PROFILE'}),
    resetActivePostcardId: () => dispatch({type: 'RESET_ACTIVE_POSTCARD_ID'}),
    resetCreatingPostcard: () => dispatch({type: 'RESET_CREATING_POSTCARD'}),
    resetActiveJournalId: () => dispatch({type: 'RESET_ACTIVE_JOURNAL_ID'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
