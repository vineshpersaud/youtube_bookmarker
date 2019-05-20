const initialState = {
  title: '',
  url: ''
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'UPDATED_DATA':
    debugger
      return action.videoFormData;
    case 'RESET_VIDEO_FORM':
      return initialState
    default:
      return state;
  }
}
