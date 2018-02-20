import { GET_RIDES, GET_TICKET, UPDATE_REQUEST } from '../constants';
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

export const getTicket= (value) => {
  return dispatch => {
    Api.getTicket(value.rideId, value.pin).then(ticket => {
      dispatch({
        type: GET_TICKET,
        ticket
      });
    });
  };
};

export const updateRequest = (value) => ({
  type: UPDATE_REQUEST,
  value
});


/*export const addNewItem = value => {
  const item = {
    packed: false,
    value,
  };

  return dispatch => {
    Api.add(item).then(item => {
      dispatch({
        type: ADD_NEW_ITEM,
        item
      });
    });
  };
};

export const toggleItem = item => {
  const updatedItem = { ...item, packed: !item.packed };
  return (dispatch, getState) => {
    Api.update(updatedItem).then(() => {
      dispatch({
        type: TOGGLE_ITEM,
        item: updatedItem,
      });
    });
  };
};

export const removeItem = item => {
  return dispatch => {
    Api.delete(item).then(() => {
      dispatch({
        type: REMOVE_ITEM,
        id: item.id,
      });
    });
  };
};

export const markAllAsUnpacked = () => {
  return dispatch => {
    Api.markAllAsUnpacked().then(() => {
      dispatch({
        type: MARK_ALL_AS_UNPACKED,
      });
    });
  };
};*/
