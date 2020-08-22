import React from 'react';
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import DataForm from "./form/DataForm";
import {PersonalDataFormModel} from "./personaldata/PersonalDataFormModel";

const personalDataModel = new PersonalDataFormModel().load()

const App: React.FC = () => {
    return (
        <Container>
            <Navbar>
                <Navbar.Brand>Personal Data</Navbar.Brand>
            </Navbar>

            <Card body>
                <DataForm model={personalDataModel}/>
            </Card>
        </Container>
    );
};

export default App;
