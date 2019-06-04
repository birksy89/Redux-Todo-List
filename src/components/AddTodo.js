import React, { Component } from "react";

export default class AddTodo extends Component {
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
