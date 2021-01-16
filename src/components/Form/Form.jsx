import React from "react";
import FormInput from "./FormInput.jsx";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.counterID = 1;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.allTodo = props.allTodo;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  q() {
    console.log("Form add todo updated");
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
    this.allTodo.push(todo);
    this.q();
  }

  render() {
    return (
      <FormInput
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        state={this.state.value}
      />
    );
  }
}

export default Form;
