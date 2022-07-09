import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from "../../Assets/img/logo-r.png";
import "./style.css";
export default function Login() {
    return (
        <Container className="border border-dark main-login">
            <Row>
                <Col className="text-center">
                    <h1 style={{ color: "#a10000" }}> Bem vindo(a) Ao La Fontana</h1>
                    <h3 style={{ color: "#a10000" }}> Cadastra-se no nosso restaurante</h3>
                </Col>
            </Row>
            <Row className="container-main-login ">
                <Col>
                    <Image src={logo} />
                </Col>
                <Col>
                    <FloatingLabel label="Email">
                        <Form.Control placeholder="Email" />

                    </FloatingLabel>
                    <br />
                    <FloatingLabel label="Senha">
                        <Form.Control placeholder="Senha" />

                    </FloatingLabel>
                    <br />
                    <div className="text-center">
                        <Button className="button-main">Logar</Button>
                    </div>
                    <br />
                    <Col className="text-center">
                        <a href="#">Esqueci a senha</a> <br />
                        <a href="#">Não tem conta? Registre-se já!</a>

                    </Col>
                </Col>
            </Row>
        </Container>
    )
}
