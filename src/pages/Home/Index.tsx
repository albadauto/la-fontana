import React from 'react'
import { Button, Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import "./style.css"
import logo from "../../Assets/img/logo-r.png";
export default function Home() {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://letseat.com.br/images/home/gallery/slide5.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Bem vindo(a)</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://letseat.com.br/images/home/gallery/slide5.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ytimg.com/vi/7VG1kdBM6cM/maxresdefault.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br /><br />
            <Container>
                <Row>
                    <Col className="text-center">
                        <Image src={logo}  width={350}/>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center">
                        <h2>Nós da La Fontana desejamos uma boa vinda ao nosso site!</h2>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center">
                        <h3>Está com fome? Está com vontade de um alimento de qualidade?</h3>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center mb-5">
                        <Button variant="dark" className="button-main">Começar!</Button>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>

                    <Col className="title text-center">
                       <h1> O que é a <i style={{color: "#daa520"}}>La Fontana ?</i> </h1>
                    </Col>

                </Row>
                <Row>
                    <Col className="border border-dark">
                        <h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta nulla ac libero tincidunt pretium. Vivamus at libero lacinia, mattis nunc nec, tincidunt leo. Duis ligula neque, suscipit at ante quis, convallis hendrerit dolor. 
                        Vestibulum eu arcu pretium, commodo ante at, consequat tellus. Suspendisse euismod libero dolor, ut iaculis est porttitor ut. Proin ut fringilla purus, et tincidunt nunc. In hac habitasse platea dictumst. Maecenas hendrerit non orci et vehicula. Sed a interdum libero. Aenean pharetra massa ac semper feugiat.
                         Praesent rutrum pharetra sapien. Curabitur euismod sapien nisi, a lacinia ex tincidunt id. Suspendisse aliquet tortor et dictum feugiat. Suspendisse ac est quis ipsum sagittis posuere. 
                        </h4>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
