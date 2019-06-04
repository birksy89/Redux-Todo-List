import React, { Component } from "react";
import { connect } from "react-redux";
// Import the possible actions
import { addTodo } from "../actions/actionCreators";

class AddTodo extends Component {
  state = {
    newTodo: "xxx"
  };

  handleChange = e => {
    const { name, value } = e.target;
    // console.log(name, value);

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {newTodo} = this.state;
    console.log("Submitting...",newTodo);

    this.props.addTodo(newTodo)
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            name="newTodo"
            onChange={e => this.handleChange(e)}
            value={this.state.newTodo}
          />
        </form>
      </div>
    );
  }
}



const mapDispatchToProps = {
  addTodo
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
