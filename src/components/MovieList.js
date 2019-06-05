import React, { Component } from "react";
import { connect } from "react-redux";
// Import the possible actions
import { fetchMovies } from "../actions/movieActions";

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const { movies } = this.props;

    const movieList = movies.map(movie => {
      return <p key={movie.id}>{movie.title}</p>;
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
  fetchMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
