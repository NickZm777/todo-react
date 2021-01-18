import React from "react";
import Form from "../Form/Form.jsx";
import TodoList from "../TodoList/TodoList.jsx";

const reduxState = [];

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: reduxState,
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(todo) {
    reduxState.push(todo);
    this.setState({ data: reduxState });
  }
  render() {
    return (
      <div className="edit-form-container">
        <h1>Create Todo</h1>
        <div className="app-container">
          <Form allTodoUpdate={this.handleUpdate} />
          <TodoList allTodo={this.state.data} />
        </div>
      </div>
    );
  }
}
export default MainPage;
