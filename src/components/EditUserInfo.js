import React, {Component} from 'react'
import {connect} from 'react-redux'

class EditUserInfo extends Component {

  state = {
    firstName: {this.props.firstName},
    lastName: {this.props.lastName},
    address: {this.props.address},
    city: {this.props.city},
    state: {this.props.state},
    zipcode: {this.props.zipcode},
    username: {this.props.username}
    email: {this.props.email},
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/users/${this.props.activeUserId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        street_address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(user => this.sendActiveUserDataToStore(user))
  }

  render() {
    return (
      <div>
        <h2>Profile <img src='https://image.flaticon.com/icons/svg/61/61456.svg' alt='edit' className='edit-button' height='20px'/></h2>
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
              <p>Password:</p>
            </div>

            <form>
              <input onChange={this.handleChange} value={this.state.firstName} name='firstName' type='text' placeholder={this.props.firstName}></input>
              <input onChange={this.handleChange} value={this.state.lastName} name='lastName' type='text' placeholder={this.props.lastName}></input>
              <input onChange={this.handleChange} value={this.state.address} name='address' type='text' placeholder={this.props.address}></input>
              <input onChange={this.handleChange} value={this.state.city} name='city' type='text' placeholder={this.props.city}></input>
              <input onChange={this.handleChange} value={this.state.state} name='state' type='text' placeholder={this.props.state}></input>
              <input onChange={this.handleChange} value={this.state.zipcode} name='zipcode' type='number' placeholder={this.props.zipcode}></input>
              <input onChange={this.handleChange} value={this.state.email} name='email' type='text' placeholder={this.props.email}></input>
              <input onChange={this.handleChange} value={this.state.username} name='username' type='text' placeholder={this.props.username}></input>
              <input onChange={this.handleChange} value={this.state.password} name='password' type='password'></input>
              <button onClick={this.handleSubmit}>Save</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeUserId: state.activeUserId,
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
  sendActiveUserDataToStore: (user) => dispatch({type: 'SET_ACTIVE_USER_DATA', payload: user})
}

export default connect(mapStateToProps)(EditUserInfo)