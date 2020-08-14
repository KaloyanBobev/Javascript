import React from 'react';

class TodoList extends React.Component {

    render() {
        return (
            <div>
                <li className="todolist">
                    <input type="checkbox" onClick={() => {
                        alert('changed')
                    }} checked={this.props.product.complated}></input>
                    <label>Task: {this.props.product.text}</label>

                </li>
            </div>
        )
    }
}
export default TodoList;