import React from "react";
import Item from "./Item/Item.jsx";
import { NavLink } from "react-router-dom";

const TodoList = () => {
  return (
    <div className="todo-list-container">
      <h1>My ToDos</h1>
      <h2>
        <span className="total-counter-text">Total ToDo Count</span>
        <span className="total-counter-number">Number</span>
      </h2>
      <div className="statistics">
        <NavLink to="/statistics">Statistics</NavLink>
      </div>
      <div className="todo-list">
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default TodoList;
