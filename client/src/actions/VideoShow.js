const getVideoShow = video => {
  return {
    type: 'GET_VIDEO_SUCCESS',
    video
  }
}

export const getVideo = (video) => {
  return dispatch => {
    return fetch(`http://localhost:3001/videos/${video.videoId}`)
      .then(response => response.json())
      .then(video => dispatch(getVideoShow(video)))
      .catch(error => console.log(error));
  }
}
