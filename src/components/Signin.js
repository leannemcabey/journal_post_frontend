import React, {Component} from 'react'

class Signin extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>Start JournalPost'ing</h1>
          First Name<input type='text'></input><br></br>
          Last Name<input type='text'></input><br></br>
          Address<input type='text'></input><br></br>
          City<input type='text'></input><br></br>
          State<input type='text'></input><br></br>
          Zip<input type='text'></input><br></br>
          Email<input type='text'></input><br></br>
          Create Username<input type='text'></input><br></br>
          Create Password<input type='text'></input><br></br>
        <button type='submit'>Submit</button>
        </form>

        <form>
          <h1>Welcome Back!</h1>
          Username<input type='text'></input><br></br>
          Password<input type='text'></input><br></br>
        <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Signin
