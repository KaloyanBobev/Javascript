import React from 'react';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            IsLoggedIn: true
        }
    }

    isLogged() {
        if (this.state.IsLoggedIn) {
            return 'in';
        } else {
            return 'out';
        }
    }

    render() {
        return (
            <div>
                <h1>You are currently logged {this.isLogged()}</h1>
            </div>
        )
    }
}
export default App;