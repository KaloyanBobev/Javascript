import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Jorge',
            age: 27
        }
    }

    render() {
        return (
            <div>
                <h3>{this.state.name}</h3>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}

export default App;