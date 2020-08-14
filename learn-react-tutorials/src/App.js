import React from 'react';

function handleClick() {

    alert("Clicked");

}

function hovered() {
    alert('hovered')
}

class App extends React.Component {


    render() {
        return (
            <div>
                <img onMouseOver={hovered} alt="bus" src="https://image.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg"></img>
                <br></br>
                <br></br>
                <button onClick={handleClick}>Click me</button>
            </div>
        )
    }
}

export default App;