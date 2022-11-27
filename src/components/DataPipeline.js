import React from 'react';
import './dataPipeline.css'
import FundTable from "./FundTable";

function DataPipeline() {
    return (
        <div className="Adj-text">
            <h1>Project Two -</h1>
            <h2>Scraper and Data Pipeline (integration underway)</h2>
            <p>The project consists of a complete scraping pipeline. The job is scheduled using a Cronjob
                specification and then run in Kubernetes. As most hedge funds (95%+) have a monthly liquidation period,
                the data is only updated at that frequency. The pipeline follows this process:</p>
            <ol className="Left-text">
                <li>Scraping hedge fund performance using Selenium.</li>
                <li>Publish data on a Pub/Sub topic.</li>
                <li>Check metadata; if the timeseries is larger than two months only the last two months get uploaded.
                    This is also to make sure that data that gets retroactively updated by the funds is correct.
                    Correction in historical data is extremely rarely further back than two months.
                </li>
                <li>Subscriber runs an ETL pipe using apache beam on Cloud Dataflow, pushing data to BigQuery. For
                    bigger workloads the ETLs were written in Rust, but as this data is relatively it is instead handled
                    in Python.
                </li>
                <li>BigQuery table deduplicated to make sure only new records got entered. Latest datapoint kept
                    filtered on primary key.
                </li>
                <li>Subscriber updates metadata tables in Cloud SQL.</li>
                <li>Data pulled from BigQuery to populate below graphs using the Actix GraphQL API and JS clients.
                </li>
            </ol>
            <br/>
            <div>
                <FundTable />
            </div>
        </div>
    );
}

export default DataPipeline
