import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function MyInfo() {
    return (
        <article>
            <h1>Kaloyan</h1>
            <p>Some biography</p>
            <ol>
                <li>Rome</li>
                <li>Liverpool</li>
                <li>Jamaica</li>
            </ol>
        </article>
    )
}

ReactDom.render(
    <MyInfo />,
    document.getElementById('root')
);