import React from 'react';
import FitSurferPrivacyPolicy from "./FitSurferPrivacyPolicy";
import {Tabs, Tab} from "react-bootstrap"
import "../style.css"


const FitSurfer = () => {
    return (
        <div>
            <Tabs defaultActiveKey="features" id="uncontrolled-tab-example">
                <Tab eventKey="features" title="Features">
                    <h1>🚧 Under Construction 🚧</h1>
                </Tab>
                <Tab eventKey="privacyPolicy" title="Policy">
                    <FitSurferPrivacyPolicy />
                </Tab>
            </Tabs>
        </div>
    );
};

export default FitSurfer;