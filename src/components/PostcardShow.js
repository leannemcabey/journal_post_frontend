import React, {Component} from 'react'
import {connect} from 'react-redux'

class PostcardShow extends Component {
  render() {
    return (
        <div>
          <h1>{this.props.activePostcard.location}</h1>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activePostcard: state.postcards.find(postcard => postcard.id === state.activePostcardId)
  }
}

export default connect(mapStateToProps)(PostcardShow)
