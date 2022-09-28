import React from 'react';
import './headshot.css'

function Headshot() {
    return (
        <div>
            <img src="./assets/headshot_small.jpg" alt="Alexander" className="Headshot"/>
            <h3>Alexander Hyll</h3>
            <p>Passionate about fast, safe, well-documented code.</p>
            <a href="mailto:alexander@hyll.nu">alexander@hyll.nu</a> <br/>
            <img src="./assets/GitHub-Mark-Light-32px.png" alt="logo" className="Logos"/> <a
            href="https://github.com/adaptive-alexander" target="_blank" rel="noreferrer">GitHub</a> <br/>
            <img src="./assets/LinkedIn.png" alt="logo" className="Logos"/> <a
            href="https://www.linkedin.com/in/alexander-hyll-588b8013a/" target="_blank" rel="noreferrer">LinkedIn</a>
            <br/>
        </div>
    );
}

export default Headshot
