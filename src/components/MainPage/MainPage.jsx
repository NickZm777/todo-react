import React from "react";

import EditForm from "../EditForm/EditForm.jsx";
import TodoList from "../TodoList/TodoList.jsx";

const MainPage = () => {
  return (
    <div className="app-container">
      <EditForm />
      <TodoList />
    </div>
  );
};

export default MainPage;
