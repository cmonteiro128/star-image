import key from "../apikey.js";
import moment from "moment-mini";

export const GET_APOD = "GET_APOD";
export const RECIEVE_APOD = "RECIEVE_APOD";
export const FETCH_APOD = "FETCH_APOD";
export const LOAD_INITIAL_APOD = "LOAD_INITIAL_APOD";
export const LOAD_MORE_APODS = "LOAD_MORE_APODS";

export function getAPOD() {
  return {
    type: GET_APOD
  };
}

export function recieveAPOD(date, json) {
  return {
    type: RECIEVE_APOD,
    date,
    json
  };
}

export function fetchAPOD(date) {
  return dispatch => {
    dispatch(getAPOD());
    return fetch(
      "https://api.nasa.gov/planetary/apod?api_key=" + key + "&date=" + date
    )
      .then(response => {
        console.log("Called API");
        return response.json();
      })
      .then(json => dispatch(recieveAPOD(date, json)));
  };
}

export function loadInitialAPOD() {
  return dispatch => {
    let currentDay = moment().format("YYYY-MM-DD");
    for (let i = 1; i <= 12; i++) {
      dispatch(fetchAPOD(currentDay));
      currentDay = moment(currentDay).add(-1, "days").format("YYYY-MM-DD");
    }
  };
}

export function loadMoreAPODs() {
  return (dispatch, getState) => {
    const { totalLoaded } = getState().APOD;    
    let currentDay = moment()
      .add(-totalLoaded, "days")
      .format("YYYY-MM-DD");
    console.log(totalLoaded);
    for (let i = 1; i <= 3; i++) {
      dispatch(fetchAPOD(currentDay));
      currentDay = moment(currentDay).add(-1, "days").format("YYYY-MM-DD");
    }
  };
}
