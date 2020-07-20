import React from "react";
import { connect } from "react-redux";

const Counter = (props) => <h1>Você tem {props.sizeTodos}</h1>;

const mapStateToProps = (state) => ({
  sizeTodos: state.todos.length,
});

export default connect(mapStateToProps)(Counter);
