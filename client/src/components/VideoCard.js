import React from 'react';
import {connect} from 'react-redux'


import { deleteVideo } from '../actions/Videos';

const VideoCard = ({video,props}) => (
  <div key={video.id}>
    <h3><a href = {"http://localhost:3000/videos/"+video.id}>
        {video.title}</a>
    </h3>
    <iframe width="560" height="315"
      src={"https://www.youtube.com/embed/"+video.url}
      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
    </iframe>

    <button className="myButton" onClick={() => {props.deleteVideo(video)}}>Delete</button>

  </div>
)
const mapStateToProps = (state) => {
  return({
    videos: state.videos
  })
}

export default VideoCard;
