export default (state = [],action) => {
  switch(action.type) {
    case 'GET_VIDEOS_SUCCESS':
      return action.videos
    case 'ADD_VIDEO_SUCCESS':
      return state.concat(action.video)
    case 'REMOVE_VIDEO_SUCCESS':
        return state.filter(video => video.id !== action.video)
  default:
   return state;
  }
}
