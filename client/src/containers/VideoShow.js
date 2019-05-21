import React,{Component} from 'react';
import {getVideo} from '../actions/VideoShow';
import {connect} from 'react-redux'

class VideoShow extends Component {

  componentDidMount(){
    const videoId = this.props.match.params
    this.props.getVideo(videoId)
  }

render(){
  return(
    <div className="VideosContainer">
      <h1>Video Show Page</h1>
    </div>
  )}
}

const mapStateToProps = (state) => {
  return({
    video: state.video
  })
}

export default connect(mapStateToProps,{getVideo})(VideoShow);
