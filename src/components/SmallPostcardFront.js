import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setActivePostcardId, setActiveJournalId, resetCreatingPostcard} from '../actions'

class SmallPostcardFront extends Component {

  handleClick = () => {
    this.props.setActivePostcard(this.props.postcard.id)
    this.props.setActiveJournal(this.props.postcard.journal_id)
    this.props.resetCreatingPostcard()
  }

  render() {
    return (
      <div onClick={this.handleClick} className='small-postcard-front'>
        <img src={this.props.postcard.photo_url} alt='this.props.activePostcard.photo_url' height='100%' width='100%'/>
        <div className="text">Take me back</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActivePostcard: (postcardId) => dispatch(setActivePostcardId(postcardId)),
    setActiveJournal: (journalId) => dispatch(setActiveJournalId(journalId)),
    resetCreatingPostcard: () => dispatch(resetCreatingPostcard())
  }
}

export default connect(null, mapDispatchToProps)(SmallPostcardFront)
