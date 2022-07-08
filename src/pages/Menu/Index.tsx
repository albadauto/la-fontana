import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { BotaoAdd } from './style'
export default function Menu() {
  return (
    <Container >
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
            <BotaoAdd>
              Adicionar aos pedidos
            </BotaoAdd>
          </div>

        </Card.Body>
      </Card>
    </Container>
  )
}
