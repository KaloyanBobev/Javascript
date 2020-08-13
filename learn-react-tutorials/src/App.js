import React from 'react';


class App extends React.Component {

    yourMethosHere() {
        return (<h1>Title</h1>)
    }

    render() {
        const style = this.yourMethosHere();
        return (
            <div>{style}</div>
        )
    }
}

export default App;