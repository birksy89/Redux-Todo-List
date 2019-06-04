import React, { Component } from 'react'
import { connect } from "react-redux";
// Import the possible actions
import { addTodo } from "../actions/actionCreators";

class TodoList extends Component {

    renderTodos = (data = []) => {
        return data.map(item =>  <li>{item}</li>)
    }
    
    render() {
        const {todoData} = this.props;
        return (
            <div>
                <ul>
                    {this.renderTodos(todoData)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    
    return {
      todoData: state.todo
    };
  };
  
  const mapDispatchToProps = {
    // increment,
    // decrement,
    // reset
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList);
  