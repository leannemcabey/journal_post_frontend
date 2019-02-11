import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setActiveUserData} from '../actions'

class SignUp extends Component {

  state = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    email: '',
    username: '',
    password: ''
  }

  handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  signUp = (event, state) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
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
    .then(r => r.json())
    .then(user => {
      user.id ? this.props.sendActiveUserDataToStore(user) : alert('Username is taken')
    })
  }

  render() {
    return (
      <form onSubmit={(event) => this.signUp(event, this.state)}>
        <input onChange={this.handleChange} placeholder='First Name' type='text' name='firstName' value={this.state.firstName}></input><br></br>
        <input onChange={this.handleChange} placeholder='Last Name' type='text' name='lastName' value={this.state.lastName}></input><br></br>
        <input onChange={this.handleChange} placeholder='Address' type='text' name='address' value={this.state.address}></input><br></br>
        <input onChange={this.handleChange} placeholder='City' type='text' name='city' value={this.state.city}></input><br></br>
        <input onChange={this.handleChange} placeholder='State' type='text'  name='state' value={this.state.state}></input><br></br>
        <input onChange={this.handleChange} placeholder='Zipcode' type='number' name='zipcode' value={this.state.zipcode}></input><br></br>
        <input onChange={this.handleChange} placeholder='Email' type='text' name='email' value={this.state.email}></input><br></br>
        <input onChange={this.handleChange} placeholder='Create Username' name='username' type='text' value={this.state.username}></input><br></br>
        <input onChange={this.handleChange} placeholder='Create Password' type='password' name='password' value={this.state.password}></input><br></br>
        <button type='submit'>Create Account</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendActiveUserDataToStore: (user) => dispatch(setActiveUserData(user))
  }
}

export default connect(null, mapDispatchToProps)(SignUp)
