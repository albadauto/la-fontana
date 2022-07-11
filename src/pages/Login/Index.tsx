import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Image, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../api';
import logo from "../../Assets/img/logo-r.png";
import "./style.css";
interface ILogin {
    email: string,
    password: string
}
export default function Login() {
    const navigate = useNavigate();
    const [login, setLoginData] = useState<ILogin>({} as ILogin);
    const [loading, setLoading] = useState<boolean>(false);
    async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true)
        try {
            const result = await api.post("/user/verifyLogin", login);
            if (result) {
                const token = result.data.token.token;
                sessionStorage.setItem("token", token);
                navigate("/");

            }
        } catch (err) {
            toast.error("Login ou senha inválidos!");
        } finally {
            setLoading(false)
        }
    }
    return (
        <Container className="border border-dark main-login">
            <Form onSubmit={handleOnSubmit}>
                <Row>
                    <Col className="text-center">
                        <h1 style={{ color: "#a10000" }}> Bem vindo(a) Ao La Fontana</h1>
                        <h3 style={{ color: "#a10000" }}> Cadastra-se ou Logue-se no nosso restaurante</h3>
                    </Col>
                </Row>
                <Row className="container-main-login mt-5 mb-5 ">
                    <Col>
                        <Image src={logo} />
                    </Col>
                    <Col>
                        <FloatingLabel label="Email">
                            <Form.Control placeholder="Email" type="email" value={login?.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginData({ ...login, email: e.target.value })} />
                        </FloatingLabel>
                        <br />
                        <FloatingLabel label="Senha">
                            <Form.Control placeholder="Senha" type="password" value={login?.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginData({ ...login, password: e.target.value })} />

                        </FloatingLabel>
                        <br />
                        <div className="text-center">
                            <Button variant="dark" className="button-main" type="submit">Logar</Button>
                        </div>
                        {loading ? 
                            <Col className="text-center">
                                <h3>Carregando....</h3>
                            </Col>
                        : ""}
                        <br />
                        <Col className="text-center">
                            <a href="#">Esqueci a senha</a> <br />
                            <a href="#">Não tem conta? Registre-se já!</a>

                        </Col>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
