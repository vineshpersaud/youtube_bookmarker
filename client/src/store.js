import {
createStore,
compose,
applyMiddleware,
combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import videos from './reducers/videos';

const reducers = combineReducers({
videos
});
const middleware = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
reducers,
composeEnhancer(applyMiddleware(thunk)),
);
