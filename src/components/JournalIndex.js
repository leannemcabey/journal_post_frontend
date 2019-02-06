import React, {Component} from 'react'
import {connect} from 'react-redux'

class JournalIndex extends Component {

  render() {
    return (
      <div>
        <img onClick={this.props.resetJournalIndex} id='return' src='https://image.flaticon.com/icons/svg/9/9895.svg' alt='back-arrow' height='50px'/>
        <div className='two-grid-container'>
          <div>
            <h2>Profile <img src='https://image.flaticon.com/icons/svg/61/61456.svg' alt='edit' className='edit-button' height='20px'/></h2>
            <div className='profile'>
              <div className='profile-details'>
                <div id='profile-headers'>
                  <p>First Name:</p>
                  <p>Last Name:</p>
                  <p>Address:</p>
                  <p>City:</p>
                  <p>State:</p>
                  <p>Zipcode:</p>
                </div>

                <div>
                  <p>{this.props.firstName}</p>
                  <p>{this.props.lastName}</p>
                  <p>{this.props.address}</p>
                  <p>{this.props.city}</p>
                  <p>{this.props.state}</p>
                  <p>{this.props.zipcode}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2>My Journals</h2>
            <div className='profile'>
              <div className='journal-index'>
                {this.props.journals.map(journal => <h4>{journal.created_at.slice(0,10)} <button onClick={() => this.props.setActiveJournal(journal.id)} className='index-button'>{journal.title}</button><img src='https://image.flaticon.com/icons/svg/61/61456.svg' alt='edit' className='edit-button' height='20px'/></h4>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    journals: state.journals,
    firstName: state.firstName,
    lastName: state.lastName,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetJournalIndex: () => dispatch({type: 'JOURNAL_INDEX'}),
    setActiveJournal: (journalId) => dispatch({type: 'SET_ACTIVE_JOURNAL', payload: journalId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalIndex)
