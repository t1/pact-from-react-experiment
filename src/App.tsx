import {configure} from 'mobx';
import React from 'react';
import './App.css';
import {PersonalDataForm} from "./PersonalDataForm";

configure({enforceActions: 'observed'});

const App: React.FC = () => {
    return (
        <div className="App">
            <PersonalDataForm/>
        </div>
    );
};

export default App;
