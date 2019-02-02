import React, {Component} from 'react'
import SmallPostcardFront from '../components/SmallPostcardFront'
import SmallPostcardBack from '../components/SmallPostcardBack'
import LargePostcardFront from '../components/SmallPostcardBack'
import LargePostcardBack from '../components/SmallPostcardBack'
import {connect} from 'react-redux'

class PostcardShow extends Component {

  handleClick = () => {
    this.props.resetActivePostcardId()
  }

  render() {
    return (
        <div>
          <button onClick={this.handleClick}>Return to Journal</button><br></br>
          <div className='two-grid-container'>
            <div className='two-grid-item' id='small-postcard-front-show'>
              <img src={this.props.postcard.photo_url} height='100%' width='100%'/>
            </div>
              <SmallPostcardBack />
          </div>
          {/* <LargePostcardFront />
          <LargePostcardBack /> */}
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetActivePostcardId: () => dispatch({type: 'RESET_ACTIVE_POSTCARD_ID'})
  }
}

export default connect(null, mapDispatchToProps)(PostcardShow)
