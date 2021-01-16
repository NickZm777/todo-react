import React from "react";
import Form from "../Form/Form.jsx";
import TodoList from "../TodoList/TodoList.jsx";

const MainPage = () => {
  const allTodo = [
    {
      text: "this",
      state: "just added",
      dateCreated: Date().toString(),
      dateCompleted: null,
      id: 245,
    },
  ];
  return (
    <div className="edit-form-container">
      <h1>Create Todo</h1>
      <div className="app-container">
        <Form allTodo={allTodo} />
        <TodoList allTodo={allTodo} />
      </div>
    </div>
  );
};

export default MainPage;
