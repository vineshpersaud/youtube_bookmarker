import React from 'react';
import './App.css';

import Videos from './containers/Videos.js'
import VideoForm from './containers/VideoForm.js'

function App() {
  return (
    <div className="App">
      <VideoForm />
      <Videos />
    </div>
  );
}

export default App;
