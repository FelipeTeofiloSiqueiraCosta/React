import React from 'react'
import { ConnectBox, ConnectItem } from './styles'
import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Container, Header } from '../styles'

export default function RegisterPage() {
  async function handleRegister() {
    console.log('register')
  }

  return (
    <Container onSubmit={handleRegister}>
      <Header>
        <Heading as="strong">Conect sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button variant={'secondary'} size={'sm'}>
            Conectar <ArrowRight />
          </Button>
        </ConnectItem>
        <Button type="submit" disabled={false}>
          Próximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
