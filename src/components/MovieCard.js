import React, { Component } from "react";
import { connect } from "react-redux";
import {  toggleMovieFavourite } from "../actions/movieActions";

class MovieCard extends Component {
  favouriteMovie = movieId => {
    console.log(`Liking movie : ${movieId}`);
    this.props.toggleMovieFavourite(movieId);
  };

  render() {
    const { id, title, isFavourite } = this.props.movie;
    return (
      <p key={id}>
        <button onClick={() => this.favouriteMovie(id)}>
          {//Check if favourite
          isFavourite ? <>X</> : <>&hearts;</>}
        </button>{" "}
        {title}
      </p>
    );
  }
}

const mapDispatchToProps = {
    toggleMovieFavourite
  };

export default connect(
    null,
    mapDispatchToProps
  )(MovieCard);
  
