import React,{Component} from 'react';
import {connect} from 'react-redux'

import {getVideos,deleteVideo} from '../actions/Videos.js'


import VideoCard from '../components/VideoCard'

class Videos extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getVideos()
  }


render(){
  return(
    <div className="VideosContainer">
      <h1>Videos</h1>
        { this.props.videos.map(video =>
          <VideoCard
            key={video.id}
            video = {video}
            props = {this.props}
          />)
      }
    </div>
  )}
}

const mapStateToProps = (state) => {
  return({
    videos: state.videos
  })
}

export default connect(mapStateToProps,{getVideos,deleteVideo})(Videos);
