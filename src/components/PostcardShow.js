import React, {Component} from 'react'
import {connect} from 'react-redux'

class PostcardShow extends Component {

  handleClick = () => {
    this.props.resetActivePostcardId()
  }

  render() {
    return (
        <div>
          <button onClick={this.handleClick}>Return to Journal</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    resetActivePostcardId: () => dispatch({type: 'RESET_ACTIVE_POSTCARD_ID'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostcardShow)
