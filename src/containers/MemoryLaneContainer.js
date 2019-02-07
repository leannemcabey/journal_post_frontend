import React, {Component} from 'react'
import SmallPostcardFront from '../components/SmallPostcardFront'
import {connect} from 'react-redux'

class MemoryLaneContainer extends Component {

  filteredPostcards = () => {
    return this.props.postcards.filter(postcard => postcard.journal_id !== this.props.activeJournalId)
  }

  render() {
    return (
        <div className="grid-item" id='memory-lane'>
          <h3>A Scroll Down Memory Lane</h3>
          <hr></hr>
          {this.props.postcards.length < 1 ? <p>Oh no! You haven't created any postcards yet!</p> : this.filteredPostcards().length < 1 ? <p>All of your memories are part of your current journal!</p> : null}
          <div className='memory-lane-cards'>
            {this.filteredPostcards().map(postcard => <SmallPostcardFront key={postcard.id} postcard={postcard}/>)}
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postcards: state.postcards,
    activeJournalId: state.activeJournalId
  }
}

export default connect(mapStateToProps)(MemoryLaneContainer)
