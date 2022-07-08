import React from 'react'
import { Col, Row, Container} from 'react-bootstrap'
import { HeaderMain } from './style'

export default function Footer() {
    return (
        <HeaderMain>
            <Container>
                <Row>
                    <Col>
                        Desenvolvido e projetado by: José Adauto 
                    </Col>
                </Row>

            </Container>

        </HeaderMain>
    )
}
