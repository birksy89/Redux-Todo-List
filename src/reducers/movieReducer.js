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
    case "TOGGLE_MOVIE_FAVOURITE":
      console.log("Inside action type - TOGGLE_MOVIE_FAVOURITE");
      //    loop around and set the movie with the id to have fav prop
      const movies = state.map(movie => {
          
        if(movie.id === action.payload){

            //  Get current value - If exists
            const isFav = movie.isFavourite
            return {
                ...movie,
                isFavourite: !isFav
            }
        }
        return movie
      })
      return [...movies];


    default:
      return state;
  }
}
