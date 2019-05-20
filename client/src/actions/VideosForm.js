const addVideo = video => {
  return {
    type: 'ADD_VIDEO_SUCCESS',
    video
  }
}

const resetVideoFrom = (video) => {
  return {
    type: 'RESET_VIDEO_FORM',
    video
  }
}

export const createVideo = (video) => {

  return dispatch => {
    return fetch(`http://localhost:3001/videos`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ video: video })
    })
      .then(response => response.json())
      .then(video => {
        dispatch(addVideo(video));
      })
      .then(video => {dispatch(resetVideoFrom(video))})
      .catch(error => console.log(error))
  }
}
