import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setActivePostcardId} from '../actions'

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
        <p id='date'>{this.props.postcard.date}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    address: state.user.address,
    city: state.user.city,
    state: state.user.state,
    zipcode: state.user.zipcode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActivePostcard: (postcardId) => dispatch(setActivePostcardId(postcardId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmallPostcardBack)
