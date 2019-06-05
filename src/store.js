import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//  Reducer(s)
import rootReducer from "./reducers";

//  Middleware
const middleware = [thunk];

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store