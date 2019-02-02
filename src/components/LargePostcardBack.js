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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activePostcard: state.postcards.find(postcard => postcard.id === state.activePostcardId)
    firstName: state.firstName,
    lastName: state.lastName,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode
  }
}

export default connect(mapStateToProps)(LargePostcardBack)
