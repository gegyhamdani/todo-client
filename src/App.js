import React from "react";
import "./App.css";

//Todo
import InputTodo from "./components/Todo/Input";
import ListTodos from "./components/Todo/List";

function App() {
  return (
    <>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
}

export default App;
