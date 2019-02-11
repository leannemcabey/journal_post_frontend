import React, {Component} from 'react'
import {connect} from 'react-redux'

class LargePostcardBack extends Component {

  render() {
    return (
      <div id='large-postcard-back'>
        <p id='message'>{this.props.activePostcard.message}</p>
        <p id='location'>{this.props.activePostcard.location}</p>
        <p id='name'>{this.props.firstName} {this.props.lastName}</p>
        <p id='address'>{this.props.address}</p>
        <p id='city-state-zip'>{this.props.city}, {this.props.state} {this.props.zipcode}</p>
        <p id='date'>{this.props.activePostcard.date}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activePostcard: state.user.postcards.find(postcard => postcard.id === state.postcard.activePostcardId),
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    address: state.user.address,
    city: state.user.city,
    state: state.user.state,
    zipcode: state.user.zipcode
  }
}

export default connect(mapStateToProps)(LargePostcardBack)
