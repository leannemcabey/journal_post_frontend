import React, {Component} from 'react'

class Postcard extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.postcard.location}</h3>
        <h4>{this.props.postcard.date}</h4>
        <p>{this.props.postcard.message}</p>
        <img src={this.props.postcard.photo_url} height='200' width='300'/>
      </div>
    )
  }
}

export default Postcard
