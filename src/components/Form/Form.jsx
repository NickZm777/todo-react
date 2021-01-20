import React, { useState } from "react";
import FormInput from "./FormInput.jsx";

const Form = (props) => {
  const [todoName, SetTodoName] = useState("");
  const [counter, SetCounter] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    const todo = {
      text: todoName,
      state: "in-process",
      dateCreated: Date().toString(),
      dateCompleted: null,
      id: counter,
    };
    props.allTodoUpdate(todo);
    SetCounter(counter + 1);
    SetTodoName("");
  }

  return (
    <FormInput
      handleSubmit={handleSubmit}
      handleChange={(event) => SetTodoName(event.target.value)}
      state={todoName}
      reset={() => SetTodoName("")}
    />
  );
};

export default Form;
