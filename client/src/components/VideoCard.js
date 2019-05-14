import React from 'react';
import { deleteVideo } from '../actions/Videos';

const VideoCard = ({video}) => (
  <div key={video.id}>
    <h3>{video.title}</h3>
    <h3>{video.url}</h3>
    <button onClick={() => {deleteVideo(video)}}>Delete</button>
  </div>
)

export default VideoCard;
