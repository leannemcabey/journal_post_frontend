import React, {Component} from 'react'
import {connect} from 'react-redux'

class UserInfo extends Component {
  render() {
    return (
      <div>
        <h2>Profile <img onClick={this.props.editUser} src={require('../images/61456.svg')} alt='edit' className='edit-button' height='20px'/></h2>
        <div className='profile'>
          <div className='profile-details'>
            <div id='profile-headers'>
              <p>First Name:</p>
              <p>Last Name:</p>
              <p>Address:</p>
              <p>City:</p>
              <p>State:</p>
              <p>Zipcode:</p>
              <p>Email:</p>
              <p>Username:</p>
            </div>

            <div>
              <p>{this.props.firstName}</p>
              <p>{this.props.lastName}</p>
              <p>{this.props.address}</p>
              <p>{this.props.city}</p>
              <p>{this.props.state}</p>
              <p>{this.props.zipcode}</p>
              <p>{this.props.email}</p>
              <p>{this.props.username}</p>
            </div>
          </div>
        </div>
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
    zipcode: state.zipcode,
    email: state.email,
    username: state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: () => dispatch({type: 'SET_EDIT_USER'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
