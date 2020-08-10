import React from 'react';

function App() {
    let task = 'Task';
    return (
        <ul>
            <li>
                <input type="checkbox"></input>
                <span> {task} 1</span>
                <p>Beer</p>
            </li>
            <li>
                <input type="checkbox"></input>
                <span> {task} 2</span>
                <p>Meat</p>
            </li>
            <li>
                <input type="checkbox"></input>
                <span> {task} 3</span>
                <p>Eggs</p>
            </li>
            <li>
                <input type="checkbox"></input>
                <span> {task} 4</span>
                <p>Bread</p>
            </li>
        </ul>
    )
}

export default App;