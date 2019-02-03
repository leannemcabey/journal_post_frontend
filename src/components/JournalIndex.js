import React, {Component} from 'react'
import {connect} from 'react-redux'

class JournalIndex extends Component {

  render() {
    return (
        <div>
          <img onClick={this.props.resetJournalIndex} id='return' src='https://image.flaticon.com/icons/svg/9/9895.svg' alt='back-arrow' height='50px'/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    resetJournalIndex: () => dispatch({type: 'JOURNAL_INDEX'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalIndex)
