import React from 'react';
import TodoList from './components/TodoList';
import todoData from './todoData';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: todoData
        }
    }

    render() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;

        const styles = {
            fontSize: '2.5em'
        };

        const todoComponents = this.state.todos.map((item) => {
            return (
                <TodoList key={item.id}
                    product={item}
                />
            )
        })

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
                {todoComponents}
            </div>
        )
    }
}

export default App;