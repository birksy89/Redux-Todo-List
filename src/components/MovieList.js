import React, { Component } from "react";
import { connect } from "react-redux";
// Import the possible actions
import { fetchMovies, toggleMovieFavourite } from "../actions/movieActions";

class MovieList extends Component {
  componentDidMount() {
    const { movies } = this.props;

    if (movies.length === 0) {
      this.props.fetchMovies();
    }
  }

  favouriteMovie = movieId => {
    console.log(`Liking movie : ${movieId}`);
    this.props.toggleMovieFavourite(movieId);
  };

  render() {
    const { movies } = this.props;

    const movieList = movies.map(movie => {
      return (
        <p key={movie.id}>
          <button onClick={() => this.favouriteMovie(movie.id)}>
            {//Check if favourite
            movie.isFavourite ? <>X</> : <>&hearts;</>}
          </button>{" "}
          {movie.title}
        </p>
      );
    });

    return (
      <div>
        <h1>List of Movies</h1>
        {movieList}
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
)(MovieList);
