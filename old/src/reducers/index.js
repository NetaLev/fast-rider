import { combineReducers } from 'redux';

import rides from './rides-reducer';
import ticket from './ticket-reducer';

export default combineReducers({
  rides,
  ticket
});

