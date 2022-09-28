import Headshot from './components/Headshot';
import OptionCalculator from "./components/OptionCalculator";
import Portfolio from "./components/Portfolio";
import DataPipeline from "./components/DataPipeline";
import Cards from "./components/Cards";
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Row className="topRow">
                        <Col lg={3}>
                            <Headshot/>
                        </Col>
                        <Col lg={9}>
                            <Portfolio />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Cards />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <OptionCalculator/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DataPipeline />
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default App;
