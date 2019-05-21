export default (state = {title:'',url: '',id: ''},action) => {
  switch(action.type) {
    case 'GET_VIDEO_SUCCESS':
      return {title: action.video.title ,
              url: action.video.url,
              id: action.video.id}
  default:
   return state;
  }
}
