import { GET_RIDES } from '../constants';

export default function(state = [] /*rides*/, action) {
  if (action.type === GET_RIDES) {
    return action.rides;
  }
  return state;
}
