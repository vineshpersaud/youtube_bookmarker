const setVideos = videos => {
    return {
      type: 'GET_VIDEOS_SUCCESS',
      videos
    }
}

const removeVideo = video => {
  return {
    type: 'REMOVE_VIDEO_SUCCESS',
    video
  }
}


export const deleteVideo = (video) => {
  let videoId = video.id
  return dispatch => {
    return fetch(`http://localhost:3001/videos/${videoId}`, {
      method: 'DELETE',
      })
      .then((video)=>{dispatch(removeVideo(videoId))})
      .catch(error => console.log(error));
    }
}

export const getVideos = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/videos`)
      .then(response => response.json())
      .then(videos => dispatch(setVideos(videos)))
      .catch(error => console.log(error));
  }
}
