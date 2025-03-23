import React, { use } from "react";
import { useState } from "react";

const TodoList = () => {

    // create a todo list const
    const [todos, setTodos] = useState([]);

    // create a todo item
    const [task, setTask] = useState("");

    // add item to list
    const addToList = () => {
        if (task.trim()) {
            setTodos([...todos, task]);
            //setTask("");
        }
    }

    return (
        <div>
            <input type="text" onChange={(e) => setTask(e.target.value)}/>
            <button onClick={addToList}>Add</button>
            {todos.map((todo, index) => (
                <li ket={index}>{todo}</li>
            ))}
        </div>
    )
}

export default TodoList;