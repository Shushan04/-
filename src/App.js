import React, { useState } from "react";
import Header from "./component/header";
import Form from "./component/form";
import TodosList from "./component/TodoList";
import './app.css';

const App = () =>{
    const [input,setInput] = useState("");
    const [todos,setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    return(
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <Header/>
                </div>
                <div>
                    <Form
                    input={input}
                    setInput={setInput}
                    todos={todos}
                    setTodos={setTodos}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                    />
                </div>
                <div>
                    <TodosList 
                    todos={todos} 
                    setTodos={setTodos} 
                    setEditTodo={setEditTodo}
                    />
                </div>
            </div>
        </div>
    )
}
export default App; 