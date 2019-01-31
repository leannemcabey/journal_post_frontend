import React, {Component} from 'react'
import NewJournal from '../components/NewJournal'
import Journal from '../components/Journal'
// import JournalIndex from '../components/JournalIndex'
import {connect} from 'react-redux'

class JournalContainer extends Component {
  render() {
    return (
        <div>
          {this.props.activeJournalId ? <Journal /> : <NewJournal />}
          {/* <JournalIndex /> */}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeJournalId: state.activeJournalId
  }
}

export default connect(mapStateToProps)(JournalContainer)
