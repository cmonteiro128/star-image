import { combineReducers } from 'redux';
import moment from 'moment-mini';
import { GET_APOD, RECIEVE_APOD, CLOSE_MODAL, SET_ACTIVE_MODAL } from '../actions/apod';

function totalLoaded(state = 0, action) {
  switch (action.type) {
    case GET_APOD:
      return state + 1;
    default:
      return state;
  }
}

function list(state = [], action) {
  const currentList = [...state, action.json];
  switch (action.type) {
    case RECIEVE_APOD:
      currentList.sort((a, b) => moment(b.date) - moment(a.date));
      return currentList;
    default:
      return state;
  }
}

function showModal(state = false, action) {
  switch (action.type) {
    case SET_ACTIVE_MODAL:
      return true;
    case CLOSE_MODAL:
      return false;
    default:
      return state;
  }
}

function activeAPOD(state = {}, action) {
  switch (action.type) {
    case SET_ACTIVE_MODAL:
      return action.json;
    default:
      return state;
  }
}
const APOD = combineReducers({
  totalLoaded,
  list,
  showModal,
  activeAPOD,
});

export default APOD;
