import React, { useState } from "react";
import "./App.css";
import List from "./List";
import { FiPlusCircle } from "react-icons/fi";

function App() {
  const [task, setTask] = useState("");
  const [lists, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const toggleTodo = (id, completed) => {
    setList((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      setAlert({ show: true, message: "Please add an item", type: "danger" });
    } else {
      setList([...lists, { task: task, id: crypto.randomUUID(), completed: false }]);
    }
    setTask("");
  };

  const deleteHandle = (id) => {
    const newList = lists.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div className="container">
      <header>
        <h1 className="today">Today's tasks</h1>
        <h1 className="date">{`${new Date().getDate()}-${new Date().getUTCMonth()}-${new Date().getFullYear()}`}</h1>
      </header>
      <List lists={lists} toggleTodo={toggleTodo} deleteHandle={deleteHandle} />
      <div className="input-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" className="addtodo">
            +
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
