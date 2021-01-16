import React from "react";
import TodoList from "../../TodoList/TodoList.jsx";

function q() {
  console.log("FormF updated");
}

const FormF = (props) => {
  q();
  return (
    <div className="form">
      <form onSubmit={props.handleSubmit}>
        <div className="form-row-left">
          <input
            className="todo-text"
            type="text"
            value={props.state}
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="form-row-right">
          <input className="add-todo-button" type="submit" value="Add"></input>
          <input
            className="clear-form-button"
            type="button"
            value="Clear"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default FormF;
