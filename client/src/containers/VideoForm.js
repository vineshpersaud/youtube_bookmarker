import React, {Component} from 'react';
import {connect} from 'react-redux'


class VideoForm extends Component {
  render () {
    return (
      <div>
        <h1>Create New Video</h1>
          <form>

            <label>Title: </label>
            <input
              type="text"
              name="title"
            />

            <br/><br/>

            <label>URL: </label>
            <input
              type="text"
              name="url"
            />

          <br/><br/>

          <button type="submit">Create Video</button>
          </form>
      </div>

    )
  }
}

export default VideoForm
