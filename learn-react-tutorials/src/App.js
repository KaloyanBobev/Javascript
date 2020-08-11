import React from 'react';
import Joke from './components/Joke';

function App() {
    return (
        <div className="container">
            <Joke
                joke={{
                    question: "Who I am",
                    punctLine: "..."

                }} />

            <Joke
                joke={{
                    question: "Is I am tall",
                    punctLine: "..."

                }} />
            <Joke
                joke={{
                    question: "Who big I am",
                    punctLine: "..."

                }} />
            <Joke
                joke={{
                    question: "Is Jorge out of the country",
                    punctLine: "..."

                }} />
            <Joke
                joke={{
                    question: "Is Alex short",
                    punctLine: "..."

                }} />
        </div>
    )
}


export default App;