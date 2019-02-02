import React, {Component} from 'react'
import SmallPostcardFront from '../components/SmallPostcardFront'
import {connect} from 'react-redux'

class JournalPostcardContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='four-grid-container'>
        {this.props.postcards.map(postcard => <SmallPostcardFront key={postcard.id} postcard={postcard}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postcards: state.postcards.filter(postcard => postcard.journal_id === state.activeJournalId)
  }
}

export default connect(mapStateToProps)(JournalPostcardContainer)
