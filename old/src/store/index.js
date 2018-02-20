import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import initialState from './initial-state';

import { getRides } from '../actions/actions';
import { getTicket } from '../actions/actions';
//import { startListeningToCountdown } from '../actions/countdown-actions';

const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);

store.dispatch(getRides());
//store.dispatch(getTicket(value));

export default store;
