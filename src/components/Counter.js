import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement, reset } from "../actions/actionCreators";

class Counter extends Component {
  handleClick = () => {
    console.log("Clicked...");
    this.props.increment();
  };
  render() {
    return (
      <div onClick={() => this.handleClick()}>
        I am the counter... (Click ME)
        <h2>{this.props.state}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = { increment, decrement, reset };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
