import React, {Component} from 'react'
import SmallPostcardFront from '../components/SmallPostcardFront'
import {connect} from 'react-redux'

class MemoryLaneContainer extends Component {
  render() {
    return (
        <div className="grid-item" id='memory-lane'>
          <h3>A Scroll Down Memory Lane</h3>
          <hr></hr>
          {this.props.postcards.length < 1 ? <p>Oh no! You haven't created any postcards yet!</p> : null}
          <div>
            {this.props.postcards.map(postcard => <SmallPostcardFront key={postcard.id} postcard={postcard}/>)}
          </div>
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
