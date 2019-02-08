import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserInfo from '../components/UserInfo'
import JournalIndex from '../components/JournalIndex'

class ProfileContainer extends Component {

  render() {
    return (
      <div>
        <img onClick={this.props.resetShowProfile} id='return' src='https://image.flaticon.com/icons/svg/9/9895.svg' alt='back-arrow' height='50px'/>
        <div className='two-grid-container'>
          <UserInfo />
          <JournalIndex />
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
    resetShowProfile: () => dispatch({type: 'SHOW_PROFILE'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
