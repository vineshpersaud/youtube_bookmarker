import React,{Component} from 'react';
import {connect} from 'react-redux'

import {getVideos} from '../actions/Videos.js'

import VideoCard from '../components/VideoCard'

class Videos extends Component {
  componentDidMount(){
    this.props.getVideos()
  }


render(){
  const videosItems = this.props.videos.map(video =>(
    <VideoCard
      video = {video}
    />
  ))
  return(
    <div className="VideosContainer">
      <h1>Videos</h1>
      {videosItems}
    </div>
  )}
}

const mapStateToProps = (state) => {
  return({
    videos: state.videos
  })
}

export default connect(mapStateToProps,{getVideos})(Videos);
