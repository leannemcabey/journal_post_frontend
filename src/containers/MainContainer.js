import React, {Component} from 'react'
import MemoryLaneContainer from '../containers/MemoryLaneContainer'
import JournalContainer from '../containers/JournalContainer'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class MainContainer extends Component {

  render() {
    return (
      <div>
        {this.props.activeUserId ?
          <div className="grid-container">
            <MemoryLaneContainer />
            <JournalContainer />
          </div>
        : <Redirect to='/welcome' />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeUserId: state.activeUserId
  }
}

export default connect(mapStateToProps)(MainContainer)
