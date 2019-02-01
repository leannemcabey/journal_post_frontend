import React, {Component} from 'react'

class SmallPostcardFront extends Component {

  handleClick = () => {
    console.log('clicked')
  }

  render() {
    return (
      <div onClick={this.handleClick} id='small-postcard-front'>
        <img src={this.props.postcard.photo_url} height='150px' width='250px'/>
        <div className="overlay">
          <div className="text">Take me back</div>
        </div>
      </div>
    )
  }
}

export default SmallPostcardFront
