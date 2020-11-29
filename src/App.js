import './App.css';
import React from "react";
import BirthPlanPreferencesGrid from "./components/birthPlanPreferencesGrid";
import AvailableBirthPlanPreferences from "./components/AvailableBirthPlanPreferences";
import {Container, Row, Col} from "react-bootstrap";

function App() {
    return (
        <Container fluid>
            <Row>
                <Col lg={8}>
                    <BirthPlanPreferencesGrid/>
                </Col>
                <Col lg={4}>
                    <AvailableBirthPlanPreferences/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
