import React from 'react';
import FitSurferPrivacyPolicy from "./FitSurferPrivacyPolicy";
import {Tabs, Tab, Container, Row, Col, Image, Jumbotron, Accordion, Card, Button} from "react-bootstrap"
import AppFeatureCard from "./AppFeatureCard";
import "../style.css"


const FitSurfer = () => {
    return (

        <div style={{opacity: "1", transform: "none", marginTop: "2rem"}}>

            <Jumbotron>

                <div>

                    <div className={"container productFeatures"}>
                        <div>
                            <h1>Product Features</h1>
                            <ul>
                                <li>Analyze wave count</li>
                                <li>Record health data</li>
                                <li>Health and Activity apps integration</li>
                                <li>Animated data presenter</li>
                            </ul>
                        </div>

                        <div>
                            <img className={"featuresMainImage"} src={require("../assets/images/FitSurferSessionsPage@2x.png")} alt={"FitSurfer iOS Application"} />
                            <img className={"featuresMainImageCenter"} src={require("../assets/images/WorkoutIC@2x.png")} alt={"FitSurfer iOS Application"} />
                            <img className={"featuresMainImage"} src={require("../assets/images/EndWorkoutIC@2x.png")} alt={"FitSurfer iOS Application"} />
                        </div>

                    </div>

                </div>

            </Jumbotron>

            <div className={"container"} style={{display: "flex", justifyContent: "center"}}>
                <a href={"https://apps.apple.com/tt/app/fitsurfer/id1532609266?ign-mpt=uo%3D2"}>
                    <img src={require("../assets/images/downloadOnTheAppStore@3x.png")} alt={""} />
                    <img style={{width: "100px", height: "100px", marginLeft: "10px"}} src={require("../assets/images/FitSurfer_1024x1024.png")} alt={""} />
                </a>
            </div>

        </div>
    );
};

export default FitSurfer;
