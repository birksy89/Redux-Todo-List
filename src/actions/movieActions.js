export const FETCH_MOVIES_BEGIN   = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const TOGGLE_MOVIE_FAVOURITE = 'TOGGLE_MOVIE_FAVOURITE';

export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies }
});

export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error }
});



// The function which does the heavy lifting...
export function fetchMovies(listType) {

  const url = `https://api.themoviedb.org/3/movie/${listType}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`

    return dispatch => {
      dispatch(fetchMoviesBegin());
      return fetch(url)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchMoviesSuccess(json.results));
          return json.Movies;
        })
        .catch(error => dispatch(fetchMoviesFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }


  // Toggle movie is favourite
  export const toggleMovieFavourite = (movieId) => ({
    type: TOGGLE_MOVIE_FAVOURITE,
    payload: movieId
  });