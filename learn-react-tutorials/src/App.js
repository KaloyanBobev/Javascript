import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    static getDerivedStateFromProps(state, props) {
        //return the new, updated state based upon the props
    }

    getSnapshotBeforeUpdate() {
        //create a backup of thr current way things are
    }

    //deprecated
    //     componentWillMount() {

    // }

    componentDidMount() {
        //GET the data I need to currenctly display
    }

    //deprecated
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.whatever !== this.props.whatever) {
    //         //do somethimg important here
    //     }
    // }

    shouldComponentUpdate(nextProps, nextState) {
        //return true if want it to update
        //return falhe if not 
    }

    //deprecated
    //     componentWillUpdate() {

    // }

    componentWillUnmount() {
        //teardown or cleanup your code before your component disapaer
        //(e.g. remove event listener)
    }

    render() {
        return (
            <div>APP</div>
        )
    }
}

export default App;