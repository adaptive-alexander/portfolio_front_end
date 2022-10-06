import React from "react";
import './optionCalculator.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FileUpload from "./FileUpload";
import axios from "axios";
import {Link} from "@mui/material";

const FileDownload = require('js-file-download');

const baseURL = "https://api.alexander.hyll.nu";
// const baseURL = "http://localhost:8080";

function getSampleFile() {
    return axios.get(`${baseURL}/opt_sample_file`,
        {responseType: "blob"}
    ).then((response) => {
        FileDownload(response.data, 'Sample.csv');
    });
}

function OptionCalculator() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="Adj-text">
                        <h1>Project One -</h1>
                        <h2>Financial Option Calculator</h2>
                        <p>A calculator for american options contracts. This was used in production as a back-end for
                            large simulations of investment opportunities and risk simulations, typically in the
                            hundreds of millions of options contracts. Each contract takes approximately 80ns to
                            calculate including price and greeks (on CPU in parallel). Performance could be improved by
                            targeting GPU, but was not necessary for these particular simulations. You can either upload
                            your own csv file or get a <span onClick={getSampleFile} className="fakeLink">sample file</span> (2 MB).</p>
                        <p>The file needs to have the following format (free order, names required):</p>
                        <div className="Table">
                            <Table striped bordered hover variant="dark" size="sm" responsive>
                                <thead>
                                <tr>
                                    <th>tickers</th>
                                    <th>opt_types</th>
                                    <th>underlying</th>
                                    <th>strike</th>
                                    <th>settles</th>
                                    <th>maturities</th>
                                    <th>rfr</th>
                                    <th>volatility</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>AAPL</td>
                                    <td>Call</td>
                                    <td>150.0</td>
                                    <td>160.0</td>
                                    <td>2022-09-17</td>
                                    <td>2022-10-21</td>
                                    <td>0.03</td>
                                    <td>0.32</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                        <p>The data needs to be complete. Max file size 5mb.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FileUpload/>
                </Col>
            </Row>
            <Row className="Adj-text">
                <div>
                    <p>The equations used are detailed in the Options repo notes, which can be
                        found <a target="_blank" rel="noreferrer"
                                 href="https://github.com/adaptive-alexander/portfolio/tree/main/book/src/notebooks">here</a> (notes.ipynb).
                    </p>
                </div>
            </Row>
        </Container>
    );
}

export default OptionCalculator
