import React from "react";
import allTodo from "../../Storage/Storage.jsx";

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
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row-left">
            <input
              className="todo-text"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-row-right">
            <input
              className="add-todo-button"
              type="submit"
              value="Add"
            ></input>
            <input
              className="clear-form-button"
              type="button"
              value="Clear"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
