import React, {Component} from 'react'
import {connect} from 'react-redux'

class LargePostcardFront extends Component {

  render() {
    return (
      <div id='large-postcard-front'>
        <img src={this.props.activePostcard.photo_url} height='100%' width='100%'/>
        <div className="text">Take me back</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activePostcard: state.postcards.find(postcard => postcard.id === state.activePostcardId)
  }
}

export default connect(mapStateToProps)(LargePostcardFront)
