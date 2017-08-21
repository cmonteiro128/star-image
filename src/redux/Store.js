import { createStore, combineReducers } from 'redux';

// The User Reducer
const userReducer = function(state = {}, action) {
  return state;
};

// The Widget Reducer
const widgetReducer = function(state = {}, action) {
  return state;
};

// Combine Reducers
const reducers = combineReducers({
  userState: userReducer,
  widgetState: widgetReducer
});

const store = createStore(reducers);
