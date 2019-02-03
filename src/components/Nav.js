import React, {Component} from 'react'
import {connect} from 'react-redux'

class Nav extends Component {
  render() {
    return (
        <nav className='nav'>
          <img src={require('../images/journal-post-stamp.png')} alt='logo'  height='70px' width='90px'/>
          {this.props.activeUserId ?
            <span className='directory'>
              <span onClick={this.props.journalIndex}>My Journals</span>
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
    journalIndex: () => dispatch({type: 'JOURNAL_INDEX'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
