import React, {Component} from 'react'
import {connect} from 'react-redux'

class JournalIndex extends Component {

  render() {
    return (
      <div>
        <h2>My Journals</h2>
        <div className='profile'>
          <div className='journal-index'>
            {this.props.journals.map(journal => {
              return (
                <h4>{journal.created_at.slice(0,10)}
                  <button onClick={() => this.props.setActiveJournal(journal.id)} className='index-button'>{journal.title}</button>
                  <img src='https://image.flaticon.com/icons/svg/61/61456.svg' onClick={() => this.setState({editingJournal: journal.id})} alt='edit' className='edit-button' height='20px'/>
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
    journals: state.journals
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveJournal: (journalId) => dispatch({type: 'SET_ACTIVE_JOURNAL', payload: journalId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalIndex)
