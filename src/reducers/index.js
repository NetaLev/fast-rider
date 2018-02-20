import { combineReducers } from 'redux';

import rides from './rides-reducer';
import selectedRide from './selected-ride-reducer';
import ticket from './ticket-reducer';
import updatedPin from './update-pin-reducer';

export default combineReducers({
  rides, selectedRide, ticket, updatedPin
});

