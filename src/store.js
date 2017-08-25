import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

export default initialState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunkMiddleware)
    )
  );
};

/*
What our state looks like:

{
    APOD: {
        totalLoaded: 0,
        list: [
            {
                {apod info},
                loadingStatus
            }
        ],
        activeAPOD: {},
        showModal: false
    }
}

*/
