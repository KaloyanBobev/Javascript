import React from 'react';

function Joke(props) {
    return (
        <div>
            <h3>{props.joke.question}?</h3>
            <p>{props.joke.punctLine}</p>
        </div>
    )

}

export default Joke;