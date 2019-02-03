import React, {Component} from 'react'
import {connect} from 'react-redux'

class JournalIndex extends Component {

  render() {
    return (
        <div>
          <img onClick={this.props.resetJournalIndex} id='return' src='https://image.flaticon.com/icons/svg/9/9895.svg' alt='back-arrow' height='50px'/>
          <h1>My Journals</h1>
          <div className='journal-index'>
            {this.props.journals.map(journal => <h4>{journal.created_at.slice(0,10)} <button onClick={() => this.props.setActiveJournal(journal.id)} className='index-button'>{journal.title}</button></h4>)}
          </div>
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
    resetJournalIndex: () => dispatch({type: 'JOURNAL_INDEX'}),
    setActiveJournal: (journalId) => dispatch({type: 'SET_ACTIVE_JOURNAL', payload: journalId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalIndex)
