import React, {Component} from 'react'
import {connect} from 'react-redux'

class NewPostcard extends Component {

  state = {
    imgData: {},
    imgFile: '',
    location: '',
    message: '',
    date: ''
  }

  returnToJournal = () => {
    this.props.changeCreatingPostcard()
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
    console.log(this.state.imgData)
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
    })
  }

  render() {
    return (
        <div>
          <img onClick={this.returnToJournal} id='return' src='https://image.flaticon.com/icons/svg/9/9895.svg' alt='back-arrow' height='50px'/>

          <form onSubmit={(event, state) => this.handleSubmit(event, state)} className='create-form' id='new-postcard'>
            <h2>Create a New Postcard</h2>

            <img onClick={this.returnToJournal} src='https://image.flaticon.com/icons/png/512/56/56735.png' className='number-icon' alt='one' height='25px'/>
            <input onChange={this.handleChange} type='file' id='file' value={this.state.imgFile} name='imgFile'></input><br></br>

            <img onClick={this.returnToJournal} src='https://image.flaticon.com/icons/png/512/56/56647.png' className='number-icon' alt='two' height='25px'/>
            Where was this photo taken?<br></br>
            <input onChange={this.handleChange} type='text' value={this.state.location} name='location'></input><br></br>

            <img onClick={this.returnToJournal} src='https://image.flaticon.com/icons/svg/56/56587.svg' className='number-icon' alt='three' height='25px'/>
            What do you want to remember about your experience?<br></br>
            <textarea onChange={this.handleChange} type='text' maxLength='350' value={this.state.message} name='message' placeholder="What did you spend your time doing? Did you have a particularly fantastic meal? Did something go terribly wrong that you'll laugh about in years to come? Write it all here to keep these memories with you."></textarea><br></br>

            <img onClick={this.returnToJournal} src='https://image.flaticon.com/icons/svg/56/56603.svg' className='number-icon'alt='four' height='25px'/>
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
    activeJournalId: state.activeJournalId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewPostcard: (postcard) => dispatch({type: 'CREATE_NEW_POSTCARD', payload: postcard}),
    resetActivePostcardId: () => dispatch({type: 'RESET_ACTIVE_POSTCARD_ID'}),
    changeCreatingPostcard: () => dispatch({type: 'CHANGE_CREATING_POSTCARD'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPostcard)
