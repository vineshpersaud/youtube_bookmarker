import React from 'react';
import {connect} from 'react-redux'


import { deleteVideo } from '../actions/Videos';

const VideoCard = ({video,props}) => (
  <div key={video.id}>
    <h3>{video.title}</h3>
    <h3>{video.url}</h3>
    <button className="myButton" onClick={() => {props.deleteVideo(video)}}>Delete</button>

  </div>
)
const mapStateToProps = (state) => {
  return({
    videos: state.videos
  })
}

export default VideoCard;
