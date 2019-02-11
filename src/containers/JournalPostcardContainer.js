import React, {Component} from 'react'
import SmallPostcardBack from '../components/SmallPostcardBack'
import {connect} from 'react-redux'

class JournalPostcardContainer extends Component {
  render() {
    return (
      <div className='four-grid-container'>
        {this.props.postcards.map(postcard => <SmallPostcardBack key={postcard.id} postcard={postcard}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postcards: state.user.postcards.filter(postcard => postcard.journal_id === state.journal.activeJournalId)
  }
}

export default connect(mapStateToProps)(JournalPostcardContainer)
