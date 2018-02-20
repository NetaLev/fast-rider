import { GET_RIDES, SELECT_RIDE, GET_TICKET, UPDATE_PIN } from '../constants';
import Api from '../api/api';

export const getRides = () => {
  return dispatch => {
    Api.getRides().then(rides => {
      dispatch({
        type: GET_RIDES,
        rides
      });
    });
  };
};

export const getTicket = (selectedRide, updatedPin) => {
  return dispatch => {
    Api.getTicket(selectedRide, updatedPin).then(ticket => {
      dispatch({
        type: GET_TICKET,
        ticket
      });
    });
  };
};

export const updatePIN = (updatedPin) => ({
  type: UPDATE_PIN,
  updatedPin
});

export const selectRide = (selectedRide) => ({
  type: SELECT_RIDE,
  selectedRide
});
