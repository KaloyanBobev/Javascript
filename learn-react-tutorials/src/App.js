import React, { Component } from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header username='Gosho' />
                <Greeting />
            </div>
        )
    }
};
class Header extends Component {
    render() {

        return (

            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}
class Greeting extends Component {

    whatTimeOfDay(hours, style) {
        if (hours < 12) {
            return "morning";

        } else if (hours > 12 && hours < 17) {
            return 'aftornnon';
        } else {
            return 'night';
        }
    }

    render() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay = this.whatTimeOfDay(hours);

        return (
            <h2>
                Good { timeOfDay}, to you sir or madam!
            </h2>
        )
    }
}
export default App;