import React from "react";
import FormInput from "./FormInput.jsx";
let counter = 1;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.counterID = counter;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.counterID++;
    counter = this.counterID;
    const todo = {
      text: this.state.value,
      state: "just added",
      dateCreated: Date().toString(),
      dateCompleted: null,
      id: counter,
    };
    this.props.allTodoUpdate(todo);
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
