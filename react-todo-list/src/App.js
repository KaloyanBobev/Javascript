import React from 'react';
import TodoList from './components/TodoList';
import todoData from './todoData';

function App() {
    const date = new Date();
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
    const todoComponents = todoData.map((item) => {
        return (
            <TodoList key={item.id}
                product={item}
            />
        )
    })
    return (
        <div>
            <h1 style={styles}>Good {timeOfDay}!</h1>
            {todoComponents}
        </div>
    )
}

export default App;