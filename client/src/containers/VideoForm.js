import React, {Component} from 'react';
import {connect} from 'react-redux'
import videoFormData from '../reducers/videoFormData'
import {createVideo} from '../actions/VideosForm'
class VideoForm extends Component {
  state = {
    title: '',
    url: ''
  }

 handelOnChange = (e) =>{

   const { value , name} = e.target;
   this.setState({
     [name]:value
   })
 }

 handleOnSubmit = (e)=>{
   
   e.preventDefault()
   this.props.createVideo(this.state)
 }

  render () {
    return (
      <div>
        <h1>Create New Video</h1>
          <form onSubmit={this.handleOnSubmit}>
            <label>Title: </label>
            <input
              onChange={this.handelOnChange}
              type="text"
              name="title"
              value={this.title}
            />
            <br/><br/>
            <label>URL: </label>
            <input
              onChange={this.handelOnChange}
              type="text"
              name="url"
              value={this.url}
            />
            <br/><br/>
            <button type="submit">Create Video</button>
          </form>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    videoFormData: state.videoFormData
  }
}
export default connect(mapStateToProps, {
    videoFormData,createVideo
  })(VideoForm);
