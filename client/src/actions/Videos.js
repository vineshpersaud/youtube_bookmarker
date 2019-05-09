const setVideos = videos => {
    return {
      type: 'GET_VIDEOS_SUCESS',
      videos
    }
}

export const getVideos = () => {
  return dispatch =>{
    return fetch(`http://localhost:3001/videos`)
    .then(response => response.json())
    .then(videos => dispatch(setVideos(videos)))
    .catch(error => console.log(error))
  }
}
