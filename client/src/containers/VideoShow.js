import React,{Component} from 'react';
import {getVideo} from '../actions/VideoShow';
import {connect} from 'react-redux'

class VideoShow extends Component {

  componentDidMount(){
    const videoId = this.props.match.params
    this.props.getVideo(videoId)
  }

render(){
  let video = this.props.video
  return(
    <div className="VideosContainer">
      <h1>Video Show Page</h1>
      <h1>{video.title}</h1>
        <iframe width="560" height="315"
          src={"https://www.youtube.com/embed/"+video.url}
          frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
        </iframe>
    </div>
  )}
}

const mapStateToProps = (state) => {
  return({
    video: state.video
  })
}

export default connect(mapStateToProps,{getVideo})(VideoShow);
