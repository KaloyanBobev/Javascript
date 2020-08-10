import React from 'react';
import TodoItem from './TodoItem';
function TodoList() {

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
            <ul>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ul>
        </div>
    )
}
export default TodoList;