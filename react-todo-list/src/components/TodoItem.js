import React from 'react';

function TodoItem() {
    return (
        <li className="todolist">
            <input type="checkbox"></input>
            <span> Task </span>
            <p>Beer</p>
        </li>
    )
}

export default TodoItem;