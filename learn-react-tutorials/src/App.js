import React from 'react';
import Conditional from './components/Conditional'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            unreadMesseges: [
                'Call your mom!',
                'New spam email available.All links defenetly safe to click'
            ]
        };
    }

    render() {
        return (
            <div>
                <h2>You have {this.state.unreadMesseges.length} unreaded massages</h2>
            </div>
        )
    }
}

export default App;