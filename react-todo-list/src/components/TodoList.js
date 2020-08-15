import React from 'react';

function TodoList(props) {


    return (
        <div>
            <li className="todolist">
                <input type="checkbox"
                    checked={props.product.complated}
                    onChange={() => props.handleChange(props.product.id)
                    }></input>
                <label>Task: {props.product.text}</label>

            </li>
        </div>
    )
}

export default TodoList;