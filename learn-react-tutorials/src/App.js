import React from 'react';

class App extends React.Component {
    //Change to use class properties
    state = {
        firstName: ""
    }


    //Change to use arrow function
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"

                    />
                </form>
                <h1>{this.state.firstName}</h1>
            </div>
        )
    }
}

export default App;