import update from 'react-addons-update';

export default (state = [],action) => {
  switch(action.type) {
    case 'GET_VIDEOS_SUCCESS':
      return action.videos
  default:
   return state;
  }
}
