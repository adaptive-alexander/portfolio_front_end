import React from 'react';
import './headshot.css'

function Headshot() {
    return (
        <div>
            <img src="./assets/headshot.jpg" alt="Alexander" className="Headshot"/>
            <h3>Alexander Hyll</h3>
            <p>Passionate about fast, safe, well-documented code.</p>
            <a href="mailto:alexander.hyll@gmail.com">alexander.hyll@gmail.com</a>
            <img src="./assets/GitHub-Mark-Light-32px.png" alt="logo" className="Logos" />    <a href="github.com/adaptive-alexander">GitHub</a> <br />
            <img src="./assets/LinkedIn.png" alt="logo" className="Logos" />    <a href="https://linkedin.com/alexander-hyll">LinkedIn</a> <br />
            <a href="127.0.0.1:8080">CV</a>
        </div>
    );
}

export default Headshot
