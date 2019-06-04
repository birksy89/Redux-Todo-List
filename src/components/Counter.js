import React, { Component } from "react";
import { connect } from "react-redux";
// Import the possible actions
import { increment, decrement, reset } from "../actions/actionCreators";

class Counter extends Component {
  handleInc = () => {
    console.log("Clicked Increment Button");
    this.props.increment();
  };
  handleDec = () => {
    console.log("Clicked Decrement Button");
    this.props.decrement();
  };
  handleReset = () => {
    console.log("Clicked Reset Button");
    this.props.reset();
  };
  render() {
    return (
      <div>
        I am the counter...
        <button onClick={() => this.handleInc()}>Increment</button>
        <button onClick={() => this.handleDec()}>Decrement</button>
        <button onClick={() => this.handleReset()}>Reset</button>
        <h2>{this.props.counter}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
