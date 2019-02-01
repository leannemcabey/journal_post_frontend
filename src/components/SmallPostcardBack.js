import React, {Component} from 'react'
import {connect} from 'react-redux'

class SmallPostcardBack extends Component {

  render() {
    return (
      <div id='small-postcard-back'>
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
    firstName: state.firstName,
    lastName: state.lastName,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode
  }
}

export default connect(mapStateToProps)(SmallPostcardBack)
