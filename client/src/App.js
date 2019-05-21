import React from 'react';
import './App.css';

import Videos from './containers/Videos.js'
import VideoShow from './containers/VideoShow.js'

import VideoForm from './containers/VideoForm.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/videos" component={Videos} />
          <Route exact path={`/videos/:videoId(\\d+)`} component={VideoShow}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
