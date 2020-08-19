import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "prefer not to say",
            destination: "",
            dietryRestrictions: {
                isVegetarian: false,
                isKosher: false,
                isLactoseFree: false
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState((prevState) => {
                return {
                    dietryRestrictions: {
                        ...prevState.dietryRestrictions,
                        [name]: checked
                    }
                }
            })
            : this.setState({
                [name]: value
            })



    }

    render() {
        return (
            <main>
                <form>
                    <fieldset>
                        <legend>Biography</legend>
                        <div>
                            <input
                                type="text"
                                value={this.state.firstName}
                                name="firstName"
                                placeholder="First Name"
                                onChange={this.handleChange}

                            />
                            <input
                                type="text"
                                value={this.state.lastName}
                                name="lastName"
                                placeholder="Last Name"
                                onChange={this.handleChange}
                            />
                            <input
                                type="text"
                                value={this.state.age}
                                name="age"
                                placeholder="Age"
                                onChange={this.handleChange} />

                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={this.state.gender === "Male"}
                                    onChange={this.handleChange}
                                />Male
                       </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={this.state.gender === "Female"}
                                    onChange={this.handleChange}
                                />Female
                       </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    checked={this.state.gender === "Other"}
                                    onChange={this.handleChange}
                                />Other
                       </label>
                        </div>

                        <div>
                            <label>Destination</label>
                            <select
                                value={this.state.destination}
                                onChange={this.handleChange}
                                name="destination"
                            >
                                <option value="">Please select a destination</option>
                                <option value="London">London</option>
                                <option value="New York">New York</option>
                                <option value="Paris">Paris</option>
                            </select>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    name="isVegetarian"
                                    value="vegetarian"
                                    onChange={this.handleChange}
                                    checked={this.state.dietryRestrictions.isVegetarian}
                                />vegetarian?
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="isKosher"
                                    value="kosher"
                                    onChange={this.handleChange}
                                    checked={this.state.dietryRestrictions.isKosher}
                                />kosher
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="isLactoseFree"
                                    value="lactose free"
                                    onChange={this.handleChange}
                                    checked={this.state.dietryRestrictions.isLactoseFree}
                                />lactose free
                            </label>
                        </div>
                        <button>Submit</button>
                    </fieldset>
                </form>
                <article>
                    <h1>First name: {this.state.firstName} Last name: {this.state.lastName}</h1>
                    <h2>Age: {this.state.age}</h2>
                    <h2>You are a: {this.state.gender}</h2>
                    <h3>Destiantion: {this.state.destination}</h3>
                    <fieldset>
                        <legend>dietry restrictions  </legend>
                        <h3>Vegeterian: {this.state.dietryRestrictions.isVegetarian ? "yes" : "no"}</h3>
                        <h3>Kasher: {this.state.dietryRestrictions.isKosher ? "yes" : "no"}</h3>
                        <h3>Lactose free: {this.state.dietryRestrictions.isLactoseFree ? "yes" : "no"}</h3>
                    </fieldset>
                </article>
            </main>

        )
    }
}

export default App;