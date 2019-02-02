import React, {Component} from 'react'
import {connect} from 'react-redux'

class SmallPostcardFront extends Component {

  handleClick = () => {
    this.props.setActivePostcard(this.props.postcard.id)
  }

  render() {
    return (
      <div onClick={this.handleClick} id='small-postcard-front'>
        <img src={this.props.postcard.photo_url} height='100%' width='100%'/>
        <div className="text">Take me back</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActivePostcard: (postcardId) => dispatch({type: 'SET_ACTIVE_POSTCARD_ID', payload: postcardId})
  }
}

export default connect(null, mapDispatchToProps)(SmallPostcardFront)
