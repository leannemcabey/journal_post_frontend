import React, {Component} from 'react'
import SmallPostcardFront from '../components/SmallPostcardFront'
import SmallPostcardBack from '../components/SmallPostcardBack'
import LargePostcardFront from '../components/LargePostcardFront'
import LargePostcardBack from '../components/LargePostcardBack'
import {connect} from 'react-redux'

class PostcardShow extends Component {

  state = {
    frontView: true
  }

  returnToJournal = () => {
    this.props.resetActivePostcardId()
  }

  showBack = () => {
    console.log(this.state)
    this.setState({
      frontView: false
    })
  }

  showFront = () => {
    this.setState({
      frontView: true
    })
  }

  render() {
    return (
        <div>
          <button onClick={this.returnToJournal}>Return to Journal</button><br></br>
          <div className='two-grid-container'>
            <div onClick={this.showFront} id='small-postcard-front-show'>
              <img src={this.props.postcard.photo_url} height='100%' width='100%'/>
            </div>
            <div onClick={this.showBack}>
              <SmallPostcardBack />
            </div>
          </div>
          {this.state.frontView ? <LargePostcardFront /> : <LargePostcardBack />}
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
