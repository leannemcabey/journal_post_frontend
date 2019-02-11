import React, {Component} from 'react'
import SmallPostcardFront from '../components/SmallPostcardFront'
import {connect} from 'react-redux'

class MemoryLaneContainer extends Component {

  filteredPostcards = () => {
    return this.props.postcards.filter(postcard => postcard.journal_id !== this.props.activeJournalId)
  }

  conditionalRender = () => {
    if (this.filteredPostcards().length < 1) {
      return (
        <div id='photo-placeholder'>
          <img src={require('../images/camera.png')} alt='camera icon' height='100%' width='100%'/>
        </div>
      )
    }
    else {
      return this.filteredPostcards().map(postcard => <SmallPostcardFront key={postcard.id} postcard={postcard}/>)
    }
  }

  render() {
    return (
      <div className="grid-item" id='memory-lane'>
        <h3>A Scroll Down Memory Lane</h3>
        <hr></hr>
        <div className='memory-lane-cards'>
          {this.conditionalRender()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postcards: state.postcard.postcards,
    activeJournalId: state.journal.activeJournalId
  }
}

export default connect(mapStateToProps)(MemoryLaneContainer)
