// export const createVideo = video => {
//   const body = new FormData(video);
//     body.append('video[title]', video.title);
//     body.append('video[url]', video.url);
//   return dispatch => {
//   fetch('http://locahost:3001/videos', {
//     method: 'POST',
//     body: body
//   })
//   .then(function(response) {return response.json()})
//   .then(function(body) {
//     console.log(body);
//   })
//   .catch(error => console.log(error))
// }
// }

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
        console.log(video);
      })
      .catch(error => console.log(error))
  }
}
