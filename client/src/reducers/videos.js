import update from 'react-addons-update';
export default (state = [],action) =>{
  switch(action.type){
    case 'GET_IMAGES_SUCCESS':
    return action.videos;
  }
}
