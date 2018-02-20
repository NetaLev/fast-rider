import { SELECT_RIDE } from '../constants';

export default function(state = -1 /*selectedRide*/, action) {
  if (action.type === SELECT_RIDE) {
    return action.selectedRide;
  }
  return state;
}
