import React from 'react';

const VideoCard = ({video}) => (
  <div key={video.id}>
    <h3>{video.title}</h3>
    <h3>{video.url}</h3>
  </div>
)

export default VideoCard;
