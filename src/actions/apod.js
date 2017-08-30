/* global fetch */

// Actions for APOD page
import moment from 'moment-mini';
import key from '../apikey';

export const GET_APOD = 'GET_APOD';
export const RECIEVE_APOD = 'RECIEVE_APOD';
export const FETCH_APOD = 'FETCH_APOD';
export const LOAD_INITIAL_APOD = 'LOAD_INITIAL_APOD';
export const LOAD_MORE_APODS = 'LOAD_MORE_APODS';

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_ACTIVE_MODAL = 'SET_ACTIVE_MODAL';

// Signals APOD request has began
export function getAPOD() {
  return {
    type: GET_APOD,
  };
}

// Signals APOD has been recieved
export function recieveAPOD(date, json) {
  return {
    type: RECIEVE_APOD,
    date,
    json,
  };
}

// Initiate the network call to obtain the images
export function fetchAPOD(date) {
  return (dispatch) => {
    dispatch(getAPOD());
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
      .then((response) => {
        console.log('Called API');
        return response.json();
      })
      .then(json => dispatch(recieveAPOD(date, json)));
  };
}

// Inital call of 10 images
export function loadInitialAPOD() {
  return (dispatch) => {
    let currentDay = moment().format('YYYY-MM-DD');
    for (let i = 1; i <= 12; i++) {
      dispatch(fetchAPOD(currentDay));
      currentDay = moment(currentDay)
        .add(-1, 'days')
        .format('YYYY-MM-DD');
    }
  };
}

// Calls a single image
export function loadMoreAPODs() {
  return (dispatch, getState) => {
    const { totalLoaded } = getState().APOD;
    let currentDay = moment()
      .add(-totalLoaded, 'days')
      .format('YYYY-MM-DD');
    console.log(totalLoaded);
    for (let i = 1; i <= 3; i++) {
      dispatch(fetchAPOD(currentDay));
      currentDay = moment(currentDay)
        .add(-1, 'days')
        .format('YYYY-MM-DD');
    }
  };
}

// Set the APOD modal as active, as well as pass its json to state
export function setActiveModal(json) {
  return {
    type: SET_ACTIVE_MODAL,
    json,
  };
}

// Close the APOD modal for image viewing
export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}
