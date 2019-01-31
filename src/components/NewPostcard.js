import React, {Component} from 'react'
import {connect} from 'react-redux'

class NewPostcard extends Component {

  state = {
    photoUrl: '',
    location: '',
    message: '',
    date: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event, state) => {
    event.preventDefault()
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
        photo_url: this.state.photo_url
      })
    })
    .then(r => r.json())
    .then(postcard => {
      this.props.createNewPostcard(postcard)
    })
  }

  render() {
    return (
        <form onSubmit={(event, state) => this.handleSubmit(event, state)}>
          Postcard Photo<br></br>
          <input onChange={this.handleChange} type='text' value={this.state.photoUrl} name='photoUrl'></input><br></br>

          Where was this photo taken?<br></br>
          <input onChange={this.handleChange} type='text' value={this.state.location} name='location'></input><br></br>

          What do you want to remember about your experience? How did you spend the day? Did you eat a particularly fantastic meal? Did something go terribly wrong that you'll laugh about in years to come?<br></br>
          <textarea onChange={this.handleChange} type='text' value={this.state.message} name='message'></textarea><br></br>

          When was this photo taken?<br></br>
          <input onChange={this.handleChange} type='text' value={this.state.date} name='date'></input><br></br>

          <button type='submit'>Save</button>
        </form>
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
    createNewPostcard: (postcard) => dispatch({type: 'CREATE_NEW_POSTCARD', payload: postcard})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPostcard)
