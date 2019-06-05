const initialState = [];

export default function movies(state = initialState, action) {
  console.log("Inside the 'movies' reducer", state, action);

  switch (action.type) {
    case "FETCH_MOVIES_BEGIN":
      console.log("Inside action type - FETCH_MOVIES_BEGIN");
      return [...state];
    case "FETCH_MOVIES_SUCCESS":
      console.log("Inside action type - FETCH_MOVIES_SUCCESS");
      return [...state, ...action.payload.movies];


    default:
      return state;
  }
}
