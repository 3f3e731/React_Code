import React from 'react'

const TodoList = ({ todos, Del, toggleTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className="todo-item">

                    <span className={todo.completed ? "completed" : ""}>
                        {todo.text}
                    </span>

                    <div className="btn-group">
                        <button
                            className="delete-btn"
                            onClick={() => Del(todo.id)}>
                            Delete
                        </button>

                        <button
                            className="toggle-btn"
                            onClick={() => toggleTodo(todo.id)}>
                            {todo.completed ? "Done" : "Pending"}
                        </button>
                    </div>

                </li>
            ))}
        </ul>
    )
}

export default TodoList