import "./App.css";

import "./components/EditForm/editForm.css";
import "./components/TodoList/todoList.css";
import "./components/TodoList/todoList.css";
import "./components/EditForm/Form/form.css";
import "./components/TodoList/Item/item.css";
import "./components/TodoList/Button/button.css";
import "./components/Statistics/statistics.css";
import { BrowserRouter, Route } from "react-router-dom";
import Statistics from "./components/Statistics/Statistics.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/statistics" component={Statistics} />
    </BrowserRouter>
  );
}

export default App;
