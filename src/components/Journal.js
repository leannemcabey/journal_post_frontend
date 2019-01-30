import React, {Component} from 'react'
import JournalPostcardContainer from '../containers/JournalPostcardContainer'

class Journal extends Component {
  render() {
    return (
        <div>
          <h1>Journal Title</h1>
          <button>Create New Postcard</button>
          <button>Close Trip</button>
          <JournalPostcardContainer />
        </div>
    )
  }
}

export default Journal
