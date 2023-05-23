import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthPages } from "./pages/AuthPages";
import { TodoPages } from "./pages/TodoPages";
import TodoForm from "./components/todoForm/TodoForm";
import { Calculate } from "./components/calculator/Calculate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<AuthPages />} />
        <Route path="/todos" element={<TodoPages />}>
          <Route path="calculate" element={<Calculate />} />
          <Route path="todo" element={<TodoForm />} />
        </Route>

        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    </div>
  );
}

export default App;
