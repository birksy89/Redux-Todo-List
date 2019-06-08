import React, { Component } from "react";
import { connect } from "react-redux";
// Import the possible actions
import { fetchMovies, toggleMovieFavourite } from "../actions/movieActions";
import MovieList from '../components/MovieList' 


class MoviesPopular extends Component {
  componentDidMount() {
    const { movies, type } = this.props;

    //if (movies.length === 0) {
      this.props.fetchMovies(type);
    //}
  }

  favouriteMovie = movieId => {
    console.log(`Liking movie : ${movieId}`);
    this.props.toggleMovieFavourite(movieId);
  };

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h1>List of Popular Movies</h1>
        <MovieList movies={movies}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = {
  fetchMovies,
  toggleMovieFavourite
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPopular);
