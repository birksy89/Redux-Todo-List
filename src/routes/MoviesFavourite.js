import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from '../components/MovieList' 


class MoviesFavourite extends Component {
  

  render() {
    const { moviesFav, type } = this.props;
    return (
      <div>
        <h1>List of Favourite Movies</h1>
        
        <MovieList movies={moviesFav}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    moviesFav: state.movieData.moviesFav
  };
};



export default connect(
  mapStateToProps,
  null
)(MoviesFavourite);
