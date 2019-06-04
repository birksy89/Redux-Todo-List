import React, { Component } from "react";
import { connect } from "react-redux";
// Import the possible actions
import { addTodo, removeTodo } from "../actions/actionCreators";

class TodoList extends Component {
  renderTodos = (data = []) => {
    return data.map(item => <li key={item.id}>
      <button onClick={() => this.handleRemove(item.id)}>X</button>
      {item.title}</li>);
  };

  handleAddDummy = () => {
    this.props.addTodo("Dummy Item...");
  };
  handleRemove = (id) => {
    console.log("I will remove...", id);
    this.props.removeTodo(id);
   
  };

  render() {
    const { todoData } = this.props;
    return (
      <div>
        <button onClick={() => this.handleAddDummy()}>Add Dummy Item</button>
        <ul>{this.renderTodos(todoData)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    todoData: state.todo
  };
};

const mapDispatchToProps = {
  addTodo,
  removeTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
