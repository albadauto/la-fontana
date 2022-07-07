import React from 'react'
import { Button, Container, Form, FormControl, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../../Assets/img/logo-r.png";
import "./style.css";
export default function Header() {
    return (
        <Navbar bg="danger" expand="lg">
            <Container >
                <Navbar.Brand href="#">
                    <Image src={logo} style={{width: 150}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#" disabled>
                            Cardápio
                        </Nav.Link>
                        <Nav.Link href="#action2">Novidades</Nav.Link>
                        <NavDropdown title="Minha conta" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
