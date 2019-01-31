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

  // The below is creating erroneous user records, and setting state in store before submit is clicked.
  // My guess is it's something to do withe the async nature of setState

  handleSubmit = (event, state) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users')
    .then( r => r.json() )
    .then( users => {
      let user = users.find(user => user.username === state.username && user.password === state.password)
      if (user) {
        this.props.setActiveUser(user.id)
      }
      else {
        fetch('http://localhost:3000/api/v1/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
          })
        })
        .then(r => r.json())
        .then(user => this.props.setActiveUser(user.id))
      }
    })
  }

  render() {
    return (
      <div>
        <form onClick={(event) => this.handleSubmit(event, this.state)}>
          <h1>Start JournalPost'ing</h1>
          First Name<input onChange={this.handleChange} type='text' name='firstName' value={this.state.firstName}></input><br></br>
          Last Name<input onChange={this.handleChange} type='text' name='lastName' value={this.state.lastName}></input><br></br>
          Address<input onChange={this.handleChange} type='text' name='address' value={this.state.address}></input><br></br>
          City<input onChange={this.handleChange} type='text' name='city' value={this.state.city}></input><br></br>
          State<input onChange={this.handleChange} type='text'  name='state' value={this.state.state}></input><br></br>
          Zipcode<input onChange={this.handleChange} type='text' name='zipcode' value={this.state.zipcode}></input><br></br>
          Email<input onChange={this.handleChange} type='text' name='email' value={this.state.email}></input><br></br>
          Create Username<input onChange={this.handleChange}  name='username' type='text' value={this.state.username}></input><br></br>
          Create Password<input onChange={this.handleChange} type='text' name='password' value={this.state.password}></input><br></br>
          <button type='submit'>Submit</button>
        </form>

        <form onClick={(event) => this.handleSubmit(event, this.state)}>
          <h1>Welcome Back!</h1>
          Username<input onChange={this.handleChange} name='username' type='text' value={this.state.username}></input><br></br>
          Password<input onChange={this.handleChange} name='password' type='text' value={this.state.password}></input><br></br>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveUser: (userId) => dispatch({type: 'SET_ACTIVE_USER', payload: userId})
  }
}

export default connect(null, mapDispatchToProps)(Signin)
