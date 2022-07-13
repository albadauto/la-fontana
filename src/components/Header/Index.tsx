import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form, FormControl, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { textSpanEnd } from 'typescript';
import logo from "../../Assets/img/logo-r.png";
import { useCart } from '../../providers/CartProvider';
import { useHeader } from '../../providers/HeaderProvider';
import "./style.css";
export default function Header() {
    const { bar, setBar }: any = useHeader();
    function handleUnsign(){
        sessionStorage.removeItem("token");
        window.location.href = "/";
    }
    if (!sessionStorage.getItem("token")) {
        setBar({ ...bar, template: <Nav.Link href="/Login">Login</Nav.Link> })
    } else {
        setBar({
            ...bar, template:
                <NavDropdown title="Minha conta" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/MyOrders">Meus pedidos</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Perfil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" onClick={() => handleUnsign()}>
                        Sair
                    </NavDropdown.Item>
                </NavDropdown>

        })
    }
   
    return (
        <Navbar expand="lg">
            <Container >
                <Navbar.Brand href="/">
                    <Image src={logo} style={{ width: 150 }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Menu" >
                            Cardápio
                        </Nav.Link>
                        <Nav.Link href="#action2">Novidades</Nav.Link>
                        {bar.template}

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
