import React, {Component} from 'react'

class NewJournal extends Component {
  render() {
    return (
        <form>
          <h2>Get started by titling your new journal:</h2>
          <input type='text'></input>
          <button type='submit'>Save</button>
        </form>
    )
  }
}

export default NewJournal
