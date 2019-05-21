import {
createStore,
compose,
applyMiddleware,
combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import videos from './reducers/videos';
import videoFormData from './reducers/videos';
import video from './reducers/video';

const reducers = combineReducers({
videos,videoFormData,video
});
const middleware = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
reducers,
composeEnhancer(applyMiddleware(thunk)),
);
