import {FileUploader} from "react-drag-drop-files";
import React, {useState} from 'react';
import './fileUpload.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const FileDownload = require('js-file-download');

// const baseURL = "https://api.alexander.hyll.nu";
const baseURL = "http://localhost:8080";

const fileTypes = ["CSV"];

function optFileUpload(file) {
    let formData = new FormData();
    formData.append("file", file)
    return axios.post(`${baseURL}/opt_file_upload`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
}

function getOptFile(id) {
    return axios.get(`${baseURL}/get_opt_file/` + id,
        {responseType: "blob"}
    ).then((response) => {
        FileDownload(response.data, 'Result.csv');
    });
}

async function sleep(duration) {
    await setTimeout(() => {
        return true
    }, duration)
}

async function processOptFile(file) {
    console.log("Uploading")
    let id = (await optFileUpload(file))
    if (id.status !== 200) {
        throw 400
    }
    id = id.data
    console.log(id)


    let tries = 0
    while (tries < 10) {
        try {
            await getOptFile(id)
            break
        } catch (e) {
            console.error(e)
            tries++
            await sleep(500)
        }
    }
}

function FileUpload() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file)
        try {
            processOptFile(file)
        } catch (e) {
            console.error(e)
        }
    };
    return (
        <Container>
            <Row>
                <Col>
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes} maxSize={5}
                                  minSize={0} classes="DragDrop"/>
                </Col>
            </Row>
        </Container>
    );
}

export default FileUpload
