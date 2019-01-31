import React, {Component} from 'react'
import Postcard from '../components/Postcard'
import {connect} from 'react-redux'

class JournalPostcardContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.postcards.map(postcard => <Postcard key={postcard.id} postcard={postcard}/>)}
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
