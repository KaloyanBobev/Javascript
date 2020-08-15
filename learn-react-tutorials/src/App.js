import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.handlerClick = this.handlerClick.bind(this);
        this.multiplyByTwo = this.multiplyByTwo.bind(this);
        this.dividebytwo = this.dividebytwo.bind(this)
    }

    handlerClick() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            }
        })
    }

    multiplyByTwo() {
        this.setState((prevState) => {
            return {
                count: prevState.count * 2
            }
        })
    }

    dividebytwo() {
        this.setState((prevState) => {
            return {
                count: prevState.count / 2
            }
        })
    }


    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handlerClick}>Click</button>
                <button onClick={this.multiplyByTwo}>Multiply by 2</button>
                <button onClick={this.dividebytwo}>dividebytwo</button>
            </div>
        )
    }
}

export default App;