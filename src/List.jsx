import { FaTrash } from "react-icons/fa";
import React from "react";

const List = ({ lists, toggleTodo, deleteHandle }) => {
  return (
    <div className="list-container">
      {lists.map((list) => {
        const { id, task, completed } = list;
        return (
          <div className="list" key={id}>
            <div className="list-input">
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => toggleTodo(id, e.target.checked)}
              />
              <li className={completed ? "checked" : ""}>{task}</li>
            </div>
            <div className="btn-container">
              <FaTrash className="delete-icon" onClick={() => deleteHandle(id)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
