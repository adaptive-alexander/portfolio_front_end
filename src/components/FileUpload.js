import {FileUploader} from "react-drag-drop-files";
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import './fileUpload.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const fileTypes = ["CSV"];

function FileUpload() {
    const [setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <Container>
            <Row>
                <Col lg={8}>
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes} maxSize={5}
                                  classes="DragDrop"/>
                </Col>
                <Col lg={4}>
                    <Button variant="primary" className="float-left GetResultButton">Get Results</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default FileUpload
