import React from 'react';

function TodoList(props) {

    return (
        <div>
            <li className="todolist">
                <input type="checkbox" checked={props.product.complated}></input>
                <label>Task: {props.product.text}</label>

            </li>
        </div>
    )
}
export default TodoList;