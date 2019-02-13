import React, {Component} from 'react'
import MemoryLaneContainer from '../containers/MemoryLaneContainer'
import JournalContainer from '../containers/JournalContainer'

class MainContainer extends Component {

  render() {
    return (
      <div className="grid-container">
        <MemoryLaneContainer />
        <JournalContainer />
      </div>
    )
  }
}

export default MainContainer
