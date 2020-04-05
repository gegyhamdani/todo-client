import React, { useState, useEffect } from "react";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) getTodos();
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, i) => {
            return (
              <tr key={i.toString()}>
                <td>{todo.description}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
