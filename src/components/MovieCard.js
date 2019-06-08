import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleMovieFavourite } from "../actions/movieActions";

class MovieCard extends Component {
  favouriteMovie = movie => {
    console.log(`Liking movie : ${movie}`);
    this.props.toggleMovieFavourite(movie);
  };

  checkIsFavourite = movieId => {
    const isFavourited = this.props.moviesFav.filter(
      movie => movie.id === movieId
    );

    return isFavourited.length;
  };

  render() {
    const { movie } = this.props;
    const { id, title } = movie;
    return (
      <p key={id}>
        <button onClick={() => this.favouriteMovie(movie)}>
          {//Check if favourite
          this.checkIsFavourite(id) ? <>X</> : <>&hearts;</>}
        </button>{" "}
        {title}
      </p>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    moviesFav: state.movieData.moviesFav
  };
};

const mapDispatchToProps = {
  toggleMovieFavourite
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);
