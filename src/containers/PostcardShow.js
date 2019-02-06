import React, {Component} from 'react'
// import SmallPostcardFront from '../components/SmallPostcardFront'
import SmallPostcardBack from '../components/SmallPostcardBack'
import LargePostcardFront from '../components/LargePostcardFront'
import LargePostcardBack from '../components/LargePostcardBack'
import {connect} from 'react-redux'

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
          <img onClick={this.returnToJournal} id='return' src='https://image.flaticon.com/icons/svg/9/9895.svg' alt='back-arrow' height='50px'/>
        <div className='postcard-show-thumbnails'>
            <div onClick={this.showFront} id='small-postcard-front-show'>
              <img src={this.props.postcard.photo_url} alt={this.props.postcard.photo_url} height='100%' width='100%'/>
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
    activePostcard: state.postcards.find(postcard => postcard.id === state.activePostcardId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetActivePostcardId: () => dispatch({type: 'RESET_ACTIVE_POSTCARD_ID'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostcardShow)
