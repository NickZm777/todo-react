import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <div className="form-row-left">
          <input className="todo-text" type="text"></input>
        </div>
        <div className="form-row-right">
          <input className="add-todo-button" type="button" value="Add"></input>
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

export default Form;
