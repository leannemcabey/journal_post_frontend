import React, {Component} from 'react'

class NewPostcard extends Component {
  render() {
    return (
        <form>
          <h2>Trip Title</h2>
          Postcard Photo<br></br>
          <input type='text'></input><br></br>

          Where was this photo taken?<br></br>
          <input type='text'></input><br></br>

          What do you want to remember about your experience? How did you spend the day? Did you eat a particularly fantastic meal? Did something go terribly wrong that you'll laugh about in years to come?<br></br>
          <input type='text'></input><br></br>

          When was this photo taken?<br></br>
          <input type='text'></input><br></br>

          <button type='submit'>Save</button>
        </form>
    )
  }
}

export default NewPostcard
