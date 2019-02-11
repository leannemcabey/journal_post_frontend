import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setActiveJournalId, resetActivePostcardId, resetShowProfile, resetCreatingPostcard, setEditJournalId} from '../actions'

class JournalIndex extends Component {

  handleClick = (journalId) => {
    this.props.setActiveJournalId(journalId)
    this.props.resetActivePostcardId()
    this.props.resetShowProfile()
    this.props.resetCreatingPostcard()
  }

  render() {
    return (
      <div>
        <h2>My Journals</h2>
        <div className='profile'>
          <div className='journal-index'>
            {this.props.journals.map(journal => {
              return (
                <h4 key={journal.id}>{journal.created_at.slice(0,10)}
                  <button onClick={() => this.handleClick(journal.id)} className='index-button'>{journal.title}</button>
                  <img src={require('../images/61456.svg')} onClick={() => this.props.setEditJournalId(journal.id)} alt='edit' className='edit-button' height='20px'/>
                </h4>
              )}
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    journals: state.journal.journals
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveJournalId: (journalId) => dispatch(setActiveJournalId(journalId)),
    resetActivePostcardId: () => dispatch(resetActivePostcardId()),
    resetShowProfile: () => dispatch(resetShowProfile()),
    resetCreatingPostcard: () => dispatch(resetCreatingPostcard()),
    setEditJournalId: (journalId) => dispatch(setEditJournalId(journalId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalIndex)
