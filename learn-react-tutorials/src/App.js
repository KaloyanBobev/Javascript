import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "prefer not to sey",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === 'checkbox' ?
            this.setState({
                [name]: checked
            })
            : this.setState({
                [name]: value
            })
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <input
                    text="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="first"
                    onChange={this.handleChange} />
                <input
                    text="text"
                    value={this.state.lastName}
                    name="lastName" placeholder="last"
                    onChange={this.handleChange} />
                <textarea
                    value={"Some default value"}
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    />Is friendly
               </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === 'male'}
                        onChange={this.handleChange}
                    />Male
               </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === 'female'}
                        onChange={this.handleChange}
                    />Female
               </label>
                <br />
                <label>Favorite color </label>
                <select
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">green</option>
                    <option value="red">red</option>
                </select>


                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a: {this.state.gender}</h2>
                <h2>My color is: {this.state.favColor}</h2>
                <button>Submit</button>
            </form>
        )
    }
}

export default App;