import "./App.css";
import EditForm from "./components/EditForm/EditForm.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import "./components/EditForm/editForm.css";
import "./components/TodoList/todoList.css";
import "./components/TodoList/todoList.css";
import "./components/EditForm/Form/form.css";
import "./components/TodoList/Item/item.css";

function App() {
  return (
    <div className="app-container">
      <EditForm />;
      <TodoList />
    </div>
  );
}

export default App;
