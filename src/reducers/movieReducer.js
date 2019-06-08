const initialState = {
  movies: [],
  moviesFav: []
};

export default function movies(state = initialState, action) {
  console.log("Inside the 'movies' reducer", state, action);

  switch (action.type) {
    case "FETCH_MOVIES_BEGIN":
      console.log("Inside action type - FETCH_MOVIES_BEGIN");
      return {
        ...state
      };
    case "FETCH_MOVIES_SUCCESS":
      console.log("Inside action type - FETCH_MOVIES_SUCCESS");
      return {
        ...state,
        movies:[...action.payload.movies]
      };
   
    case "TOGGLE_MOVIE_FAVOURITE":
      console.log("Inside action type - TOGGLE_MOVIE_FAVOURITE");
      let newMovieFav = [...state.moviesFav];
      if(state.moviesFav.includes(action.payload)){
        // Remove from array
        newMovieFav = newMovieFav.filter(item => item !== action.payload)
      }
      else{
        // Add to array
        newMovieFav = state.moviesFav.concat(action.payload)
      } 

      return {
        ...state,
        moviesFav: newMovieFav
      };
      

    default:
      return state;
  }
}
