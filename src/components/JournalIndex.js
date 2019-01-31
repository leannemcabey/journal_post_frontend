import React, {Component} from 'react'
import {connect} from 'react-redux'

class JournalIndex extends Component {
  render() {
    return (
        <div>
          <h1>My Journals</h1>
          {this.props.journals.map(journal => <h4>{journal.created_at} - {journal.title}</h4>)}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    journals: state.journals
  }
}

export default connect(mapStateToProps)(JournalIndex)
