import "./App.css";
import Todo from "./todo.js";
import Home from "./home";
import Nav from "./nav";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const todos = useSelector((state) => state.todos.todo);

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Nav data={todos}></Nav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {todos?.map((el) => (
            <Route
              key={el.id}
              path={`/todos/${el.id}`}
              element={<Todo value={el} />}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
