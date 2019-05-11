import React,{Component} from 'react';
import {connect} from 'react-redux'

import {getVideos} from '../actions/Videos.js'

class Videos extends Component {
  componentDidMount(){
    this.props.getVideos()
    debugger
  }


render(){
  return(
    <div className="VideosContainer">
      <h1>Videos</h1>
    </div>
  )}
}

const mapStateToProps = (state) => {
  return({
    videos: state.videos
  })
}

export default connect(mapStateToProps,{getVideos})(Videos);
