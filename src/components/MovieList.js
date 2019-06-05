import React, { Component } from "react";
import { connect } from "react-redux";
// Import the possible actions
import { fetchMovies } from "../actions/movieActions";

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return <div>List of Movies</div>;
  }
}

const mapDispatchToProps = {
  fetchMovies
};

export default connect(
  null,
  mapDispatchToProps
)(MovieList);
