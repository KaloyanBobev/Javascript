import React from 'react';

import Joke from './components/Joke';
import jokesData from './JokesData';

function App() {
    const jokeComponents = jokesData.map((joke) => {
        return (
            <Joke key={joke.id} question={joke.question}
                punctLine={joke.punctLine}
            />
        )
    })

    return (
        <div className="container">
            {jokeComponents}
        </div>
    )
}


export default App;