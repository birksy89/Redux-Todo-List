import React, { Component } from "react";
import { connect } from "react-redux";
// Import the possible actions
import { fetchMovies } from "../actions/movieActions";
import MovieList from "../components/MovieList";

class MoviesPopular extends Component {
  componentDidMount() {
    const { type } = this.props;

    this.props.fetchMovies(type);
  }

  render() {
    const { movies, type } = this.props;
    return (
      <div>
        <h1>List of {type} Movies</h1>
        <MovieList movies={movies} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    movies: state.movieData.movies
  };
};

const mapDispatchToProps = {
  fetchMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPopular);
