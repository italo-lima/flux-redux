import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as TodoActions from "./actions/todos";

class TodoList extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  state = {
    newTodo: "",
  };

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodo);

    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>

        <input
          type="text"
          value={this.state.newTodo}
          onChange={(e) =>
            this.setState({
              newTodo: e.target.value,
            })
          }
        />
        <button onClick={this.addNewTodo}>Novo ToDo</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
