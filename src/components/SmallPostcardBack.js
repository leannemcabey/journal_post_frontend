import React, {Component} from 'react'
import {connect} from 'react-redux'

class SmallPostcardBack extends Component {

  handleClick = () => {
    this.props.setActivePostcard(this.props.postcard.id)
  }

  render() {
    return (
      <div onClick={this.handleClick} id='small-postcard-back'>
        <p id='message'>{this.props.postcard.message}</p>
        <p id='location'>{this.props.postcard.location}</p>
        <p id='name'>{this.props.firstName} {this.props.lastName}</p>
        <p id='address'>{this.props.address}</p>
        <p id='city-state-zip'>{this.props.city}, {this.props.state} {this.props.zipcode}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // activePostcard: state.postcards.find(postcard => postcard.id === state.activePostcardId),
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
    setActivePostcard: (postcardId) => dispatch({type: 'SET_ACTIVE_POSTCARD_ID', payload: postcardId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmallPostcardBack)
