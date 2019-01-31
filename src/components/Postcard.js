import React, {Component} from 'react'

class Postcard extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.postcard.location}</h3>
        <h4>{this.props.postcard.date}</h4>
        <p>{this.props.postcard.message}</p>
      </div>
    )
  }
}

export default Postcard
