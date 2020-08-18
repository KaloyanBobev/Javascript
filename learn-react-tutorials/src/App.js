import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <input text="text" value={this.state.firstName} name="firstName" placeholder="first" onChange={this.handleChange} />
                <input text="text" value={this.state.lastName} name="lastName" placeholder="last" onChange={this.handleChange} />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App;