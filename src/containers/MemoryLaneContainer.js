import React, {Component} from 'react'
import Postcard from '../components/Postcard'
import {connect} from 'react-redux'

class MemoryLaneContainer extends Component {
  render() {
    return (
        <div>
        <h1>A Scroll Down Memory Lane</h1>
        {this.props.postcards.map(postcard => <Postcard key={postcard.id} postcard={postcard}/>)}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postcards: state.postcards
  }
}

export default connect(mapStateToProps)(MemoryLaneContainer)
