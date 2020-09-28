import React from 'react';
import {Container, Row, Col, Image, Nav} from 'react-bootstrap';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import "../style.css";
import Home from "./Home";
import FitSurfer from "./FitSurfer";

const Apps =() => {
    return (

            <Container fluid>
                <Row className={"AppsRow"}>
                    <Col className={"Col"}>
                        <Nav.Link  href={"/Apps/FitSurfer"}><Image className={"appCircleImage"} src="FitSurfer_1024x1024.png" alt={"FitSurfer iOS Application"}></Image></Nav.Link>
                    </Col>
                    <Col className={"Col"}>
                        <Nav.Link href={"/Apps/Navifit"}><Image className={"appCircleImage"} src="Navifit_1024x1024.png" alt={"Navifit iOS Application"}></Image></Nav.Link>
                    </Col>
                    <Col className={"Col"}>
                        <Nav.Link href={"/Apps/ProjectIntersect"}><Image className={"appCircleImage"} src="ProjectIntersect_1024x1024.png" alt={"Project Intersect iOS application"}></Image></Nav.Link>
                    </Col>
                </Row>

            </Container>

    );
};

export default Apps;