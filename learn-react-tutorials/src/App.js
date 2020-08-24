import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage'

export default class App extends React.Component {
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
            <BrowserRouter>
                <div>
                    <Route component={LandingPage} />
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
            </BrowserRouter>
        )
    }
}

