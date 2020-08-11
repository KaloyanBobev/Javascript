import React from 'react';

function Joke(props) {

    return (
        <div className="question">
            <h3 style={{ display: props.question ? 'block' : 'none' }}>Question: {props.question}</h3>
            <h3 style={{ color: !props.question && 'red' }}>Answer: {props.punctLine}</h3>
        </div>
    )

}

export default Joke;