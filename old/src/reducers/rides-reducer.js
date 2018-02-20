import { GET_RIDES } from '../constants';

export default function(state = [] /*rides*/, action) { //rplaced from {}
  if (action.type === GET_RIDES) {
    return action.rides;
  }
  return state;
}
