import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import AppLayout from './components/AppLayout';
export default class App extends React.Component {


    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="./app">App</a></li>
                    </ul>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/app" component={AppLayout} />

                </div>
            </BrowserRouter>
        )
    }
}

