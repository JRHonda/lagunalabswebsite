import React from 'react';
import FitSurferPrivacyPolicy from "./FitSurferPrivacyPolicy";
import {Tabs, Tab, Container, Row, Col, Image, Jumbotron, Accordion, Card, Button} from "react-bootstrap"
import AppFeatureCard from "./AppFeatureCard";
import "../style.css"


const FitSurfer = () => {
    return (
        <div>

            <Container>
                <Row>
                    <Col>
                        <Image className={"appCircleImage"} src={require("../assets/images/FitSurfer_1024x1024.png")} alt={"FitSurfer iOS Application"} />
                    </Col>
                    <Col>
                        <div>
                            <Image src={require("../assets/images/FitSurferWorkoutPage@2x.png")} alt={"FitSurfer iOS Application"} fluid/>
                            <Accordion>

                                <AppFeatureCard headline={"Headline"} eventKey = "0" isCollapsed ={true} content={"Hello, World!"} />

                                <Card>

                                </Card>

                                <Card>

                                </Card>
                            </Accordion>
                        </div>

                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default FitSurfer;

// {/*<Tabs defaultActiveKey="features" id="uncontrolled-tab-example">*/}
// {/*    <Tab eventKey="features" title="Features">*/}
// {/*        <h1>🚧 Under Construction 🚧</h1>*/}
// {/*    </Tab>*/}
// {/*    <Tab eventKey="privacyPolicy" title="Policy">*/}
// {/*        <FitSurferPrivacyPolicy />*/}
// {/*    </Tab>*/}
// {/*</Tabs>*/}