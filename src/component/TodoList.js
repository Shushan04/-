import React from "react";

const TodosList = ({ todos, setTodos }) => {
  const handleInputChange = (event, todo) => {
    const updatedTodo = { ...todo, title: event.target.value };
    const updatedTodos = todos.map((t) => (t.id === todo.id ? updatedTodo : t));
    setTodos(updatedTodos);
  };

  const handleDelete = ({ id }) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => handleInputChange(event, todo)}
          />
          <div>
            <button className="button-check task-button">
              <i className="fa fa-check"></i>
            </button>
            <button className="button-hide task-button">
              <i className="fa fa-eye-slash"></i>
            </button>
            <button className="button-edit task-button">
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;



