import React, { useState } from 'react';
import TodoList from './TodoList';

const TodoForm = ({ generateId }) => {
    const [item, setItem] = useState("");
    const [todos, setTodos] = useState([]);

    function handleAdd() {
        const newTodo = {
            id: generateId(),
            text: item,
            completed: false
        };
        // console.log(newTodo);
        setTodos([...todos, newTodo]);
        setItem("");
    }

    function Del(id) {
        const newTodo = todos.filter(todo => todo.id !== id);
        setTodos(newTodo);
    }
    function toggleTodo(id) {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        setTodos(updatedTodos);
    }
    return (
        <>
            <h1>Todo App</h1>
            <div className="container">
                <input type="text" placeholder='Add Item'
                    value={item}
                    onChange={(e) => setItem(e.target.value)} />

                <button onClick={handleAdd}>Add</button>
            </div>
            <TodoList todos={todos} Del={Del} toggleTodo={toggleTodo} />
        </>
    )
}

export default TodoForm;
