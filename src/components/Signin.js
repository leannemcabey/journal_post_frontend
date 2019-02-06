import React, {Component} from 'react'
import {connect} from 'react-redux'

class Signin extends Component {

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

  signIn = (event, state) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users')
    .then( r => r.json() )
    .then( users => {
      let user = users.find(user => user.username === state.username)
      if (user && user.password === state.password) {
        this.props.sendActiveUserDataToStore(user)
      }
      else {
        this.setState({
          username: '',
          password: ''
        })
        alert('Incorrect username or password')
      }
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
        password: this.state.password,
        current_journal_id: null
      })
    })
    .then(r => r.json())
    .then(user => {
      user.id ? this.props.sendActiveUserDataToStore(user) : alert('Username is taken')
    })
  }

  conditionalRender = () => {
    if (this.props.userType === 'new') {
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
    else if (this.props.userType === 'returning') {
      return (
        <form onSubmit={(event) => this.signIn(event, this.state)}>
          <input onChange={this.handleChange} placeholder='Username' name='username' type='text' value={this.state.username}></input><br></br>
          <input onChange={this.handleChange} placeholder='Password' name='password' type='password' value={this.state.password}></input><br></br>
          <button type='submit'>Sign In</button>
        </form>
      )
    }
  }

  render() {
    return this.conditionalRender()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendActiveUserDataToStore: (user) => dispatch({type: 'SET_ACTIVE_USER_DATA', payload: user})
  }
}

export default connect(null, mapDispatchToProps)(Signin)
