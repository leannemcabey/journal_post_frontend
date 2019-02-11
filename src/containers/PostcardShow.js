import React, {Component} from 'react'
import SmallPostcardBack from '../components/SmallPostcardBack'
import LargePostcardFront from '../components/LargePostcardFront'
import LargePostcardBack from '../components/LargePostcardBack'
import {connect} from 'react-redux'
import {resetActivePostcardId} from '../actions'

class PostcardShow extends Component {

  state = {
    frontView: false
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
        <img onClick={this.returnToJournal} id='return' src={require('../images/back-arrow.svg')} alt='back-arrow' height='50px'/>
        <div className='postcard-show-thumbnails'>
          <div onClick={this.showFront} id='small-postcard-front-show'>
            <img src={this.props.activePostcard.photo_url} alt={this.props.activePostcard.photo_url} height='100%' width='100%'/>
          </div>
          <div onClick={this.showBack}>
            <SmallPostcardBack postcard={this.props.activePostcard}/>
          </div>
        </div>
          {this.state.frontView ? <LargePostcardFront /> : <LargePostcardBack />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activePostcard: state.postcard.postcards.find(postcard => postcard.id === state.postcard.activePostcardId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetActivePostcardId: () => dispatch(resetActivePostcardId())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostcardShow)
