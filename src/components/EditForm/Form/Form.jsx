import React from "react";
import allTodo from "../../Storage/Storage.jsx";
import TodoList from "../../TodoList/TodoList.jsx";
import FormF from "../Form/FormF.jsx";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.counterID = 1;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.counterID++;
    const todo = {
      text: this.state.value,
      state: "just added",
      dateCreated: Date().toString(),
      dateCompleted: null,
      id: this.counterID,
    };
    allTodo.push(todo);
  }

  render() {
    return (
      <FormF
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        state={this.state.value}
      />
    );
  }
}

export default Form;
