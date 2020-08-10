import React from 'react';

function TodoList() {
    let task = 'Task';
    const date = new Date(2020, 8, 10, 18);
    const hours = date.getHours();
    let timeOfDay;

    const styles = {

        fontSize: '2.5em'
    };

    if (hours < 12) {
        timeOfDay = 'morning';
        styles.color = 'green';
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon';
        styles.color = 'darkblue';
    } else {
        timeOfDay = 'night';
        styles.color = 'darkred';
    }




    return (
        <div>
            <h1 style={styles}>Good {timeOfDay}!</h1>
            <ul >
                <li className="todolist">
                    <input type="checkbox"></input>
                    <span> {`${task} 1`} </span>
                    <p>Beer</p>
                </li>
                <li>
                    <input type="checkbox"></input>
                    <span> {task} 2</span>
                    <p>Meat</p>
                </li>
                <li className="todolist">
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
        </div>
    )
}
export default TodoList;