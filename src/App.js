import "./App.css";
import EditForm from "./components/EditForm/EditForm.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import "./components/EditForm/editForm.css";
import "./components/TodoList/todoList.css";
import "./components/TodoList/todoList.css";
import "./components/EditForm/Form/form.css";
import "./components/TodoList/Item/item.css";
import "./components/TodoList/Button/button.css";
import "./components/Statistics/statistics.css";
import { BrowserRouter, Route } from "react-router-dom";
import Statistics from "./components/Statistics/Statistics.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Route path="/" component={(EditForm, TodoList)} />
      </div>
      <div>
        <Route path="/statistics" component={Statistics} />
      </div>
    </BrowserRouter>
  );
}

export default App;
