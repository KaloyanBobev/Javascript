import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <main>
                <form>
                    <fieldset>
                        <legend>Biography</legend>
                        <input placeholder="First Name" />
                        <input placeholder="Last Name" />
                        <input placeholder="Age" />
                    </fieldset>
                </form>
            </main>

        )
    }
}

export default App;