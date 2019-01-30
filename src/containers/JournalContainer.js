import React, {Component} from 'react'
import NewJournal from '../components/NewJournal'
import Journal from '../components/Journal'
import JournalIndex from '../components/JournalIndex'

class JournalContainer extends Component {
  render() {
    return (
        <div>
          <NewJournal />
          <Journal />
          <JournalIndex />
        </div>
    )
  }
}

export default JournalContainer
