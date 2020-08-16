import React from 'react';
import Conditional from './components/Conditional'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }



    render() {
        return (
            <div>
                {this.state.isLoggedIn === true ? <h1>Logged in</h1> :
                    <Conditional />}
                <button onClick={this.handleClick}>{this.state.isLoggedIn ? 'Log Out'.toLocaleUpperCase() : 'Log In'.toLocaleUpperCase()}</button>
            </div>
        )
    }

}

export default App;