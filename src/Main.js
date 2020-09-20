import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Home from "./client/components/Home";
import FitSurfer from "./client/components/FitSurfer";


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
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <Nav.Link as={Link} to="/apps/FitSurfer">FitSurfer</Nav.Link>
                         </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/apps/FitSurfer' component={FitSurfer} />
                    <Route render = { function () { return <p>Not found</p> } } />
                </Switch>
            </div>

        </BrowserRouter>
    );
};

export default Main;