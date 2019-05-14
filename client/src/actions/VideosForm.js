const addVideo = video => {
  return {
    type: 'ADD_VIDEO_SUCCESS',
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
      .catch(error => console.log(error))
  }
}
