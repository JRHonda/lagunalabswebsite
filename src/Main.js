import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Home from "./client/components/Home";
import FitSurfer from "./client/components/FitSurfer";
import Apps from "./client/components/Apps";


const Main = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Laguna Labs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/apps">Apps</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Apps' component={Apps} />
                    <Route exact path='/Apps/FitSurfer' component={FitSurfer} />
                    <Route render = { function () { return <p>Not found</p> } } />
                </Switch>
            </div>

        </BrowserRouter>
    );
};

export default Main;