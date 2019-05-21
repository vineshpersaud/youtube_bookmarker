
export const getVideo = (videoId) => {
  debugger
  return dispatch => {
    return fetch(`http://localhost:3001/videos/${videoId}`)
      .then(response => response.json())
      .catch(error => console.log(error));
  }
}
