import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

import Logo from '../../images/logo.svg';

function Header() {
    return (
        <div>
            <Navbar bg="primary" variant="light">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="#home">
                            <img
                                src={Logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle/>
                    <Nav className="me-auto">
                        <LinkContainer to="/hosts">
                            <Nav.Link className='nav-item'>Post host</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/helps">
                            <Nav.Link>Post help request</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/transports">
                            <Nav.Link>Post transport</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;