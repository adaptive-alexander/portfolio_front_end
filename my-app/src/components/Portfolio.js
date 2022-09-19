import React from 'react';
import './portfolio.css'

function Portfolio() {
    return (
        <div className="Adj-text">
            <h1>Portfolio</h1>
            <h2>Introduction</h2>
            <p>Alexander is a previous quantitative hedge fund manager. From 2016-2022 he ran Adaptive Hedge Fund
                Management, which has now been discontinued. In that role he was responsible for the management of the
                company and fund, with a primary focus on investment strategy and research.</p>
            <p>The fund used advanced statistical models and big data to find relative out-performance in markets.
                As such a large portion of time was spent developing statistical models, including machine learning, as
                well as building data pipelines and infrastructure for large analytical workloads. The portfolios repo
                can be found <a target="_blank" rel="noreferrer"
                                href="https://github.com/adaptive-alexander/portfolio/">here</a>.</p>
            <h2>Projects</h2>
            <p>The projects, as well as this website, are run on cloud infrastructure (GCP) powered by Kubernetes. The
                front-end is a React app, while the back-end is an Actix web server running a GraphQL API, with
                computations handled by containerized Rust and Python.</p>
        </div>
    );
}

export default Portfolio
