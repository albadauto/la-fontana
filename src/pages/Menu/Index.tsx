import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../../providers/CartProvider'
import { BotaoAdd } from './style'

export default function Menu() {
  const { finalPrice, order, handleAddCart } = useContext(CartContext)
  return (
    <Container >
      <>
        <Card style={{ width: '18rem', marginTop: 20 }}>
          <Card.Img variant="top" src="https://receitatodahora.com.br/wp-content/uploads/2022/03/pizza-de-calabresa.jpg" />
          <Card.Body>
            <Card.Title>R$ 30,00</Card.Title>
            <Card.Text>
              Pizza de calabresa
            </Card.Text>

            <Card.Text>
              Pizza deliciosa com calabresa, pode acreditar que é de verdade. Come ai meu querido, ce vai curtir
            </Card.Text>

            <div className="text-center">
              <BotaoAdd onClick={() => handleAddCart(30, "Pizza de calabresa", "Pizza deliciosa com calabresa, pode acreditar que é de verdade. Come ai meu querido, ce vai curtir")}>
                Adicionar aos pedidos
              </BotaoAdd>
            </div>
          </Card.Body>
        </Card>
            <h3>{finalPrice}</h3>
           


      </>
    </Container>
  )
}
