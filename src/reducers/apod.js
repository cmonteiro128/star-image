import { combineReducers } from "redux";
import moment from "moment-mini";
import {
  GET_APOD,
  RECIEVE_APOD,
} from "../actions/apod";

function totalLoaded(state = 0, action) {
  switch (action.type) {
    case GET_APOD:
      return state + 1;
    default:
      return state;
  }
}

function list(
  state = [],
  action
) {
  switch (action.type) {
    case RECIEVE_APOD:
      const currentList = [...state, action.json];
      currentList.sort(function(a, b) {
        return moment(b.date) - moment(a.date);
      });      
      return currentList;
    default:
      return state;
  }
}

const APOD = combineReducers({
  totalLoaded,
  list
});

export default APOD;