import React from 'react'
import { Container, Hero, Preview } from './styles'
import { Heading, Text } from '@ignite-ui/react'
import previewImage from '../../assets/preview.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function HomePage() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl" as="h1">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          alt="Calendário"
          height={400}
          quality={100}
          priority={true}
        />
      </Preview>
    </Container>
  )
}
