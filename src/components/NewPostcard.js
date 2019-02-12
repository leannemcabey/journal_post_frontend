import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createNewPostcard, resetCreatingPostcard, resetActivePostcardId, toggleCreatingPostcard} from '../actions'
import {Spinner} from 'spin.js'

class NewPostcard extends Component {

  state = {
    imgData: {},
    imgFile: '',
    location: '',
    message: '',
    date: ''
  }

  returnToJournal = () => {
    this.props.toggleCreatingPostcard()
  }

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }

  handleChange = (event) => {

    if (event.target.name === 'imgFile') {
      this.getBase64(event.target.files[0])
        .then(response => this.setState({imgData: response.split(',').pop()}))
    }

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event, state) => {
    event.preventDefault()

    const opts = {
      lines: 13, // The number of lines to draw
      length: 38, // The length of each line
      width: 10, // The line thickness
      radius: 45, // The radius of the inner circle
      scale: 1, // Scales overall size of the spinner
      corners: 1, // Corner roundness (0..1)
      color: 'black', // CSS color or array of colors
      fadeColor: 'transparent', // CSS color or array of colors
      speed: 5, // Rounds per second
      rotate: 0, // The rotation offset
      animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
      direction: 1, // 1: clockwise, -1: counterclockwise
      zIndex: 1, // The z-index (defaults to 2000000000)
      className: 'spinner', // The CSS class to assign to the spinner
      top: '50%', // Top position relative to parent
      left: '59%', // Left position relative to parent
      shadow: '0 0 1px transparent', // Box-shadow for the lines
      position: 'absolute' // Element positioning
    }
    const target = document.getElementById('new-postcard')
    new Spinner(opts).spin(target)

    fetch('http://localhost:3000/api/v1/postcards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        journal_id: this.props.activeJournalId,
        location: this.state.location,
        message: this.state.message,
        date: this.state.date,
        photo_url: this.state.imgData
      })
    })
    .then(r => r.json())
    .then(postcard => {
      this.props.createNewPostcard(postcard)
      this.props.resetCreatingPostcard()
    })
  }

  render() {
    return (
      <div>
        <img onClick={this.returnToJournal} id='return' src={require('../images/back-arrow.svg')} alt='back-arrow' height='50px'/>

        <form onSubmit={(event, state) => this.handleSubmit(event, state)} className='create-form' id='new-postcard'>
          <h2>Create a New Postcard</h2>

        <img src={require('../images/one.png')} className='number-icon' alt='one' height='25px'/>
          <input onChange={this.handleChange} type='file' id='file' value={this.state.imgFile} name='imgFile'></input><br></br>

          <img src={require('../images/two.png')} className='number-icon' alt='two' height='25px'/>
          Where was this photo taken?<br></br>
          <input onChange={this.handleChange} type='text' value={this.state.location} name='location'></input><br></br>

          <img src={require('../images/three.svg')} className='number-icon' alt='three' height='25px'/>
          What do you want to remember about your experience?<br></br>
          <textarea onChange={this.handleChange} type='text' maxLength='350' value={this.state.message} name='message' placeholder="What did you spend your time doing? Did you have a particularly fantastic meal? Did something go terribly wrong that you'll laugh about in years to come? Write it all here to keep these memories with you."></textarea><br></br>

          <img src={require('../images/four.svg')} className='number-icon'alt='four' height='25px'/>
          When was this photo taken?<br></br>
          <input onChange={this.handleChange} type='date' value={this.state.date} name='date'></input><br></br>

          <button type='submit'>Save</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeJournalId: state.journal.activeJournalId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewPostcard: (postcard) => dispatch(createNewPostcard(postcard)),
    resetCreatingPostcard: () => dispatch(resetCreatingPostcard()),
    resetActivePostcardId: () => dispatch(resetActivePostcardId()),
    toggleCreatingPostcard: () => dispatch(toggleCreatingPostcard())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPostcard)
