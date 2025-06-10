import React from 'react'
import { Container, Form, FormError, Header } from './styles'
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Mínimo de 3 caracteres' })
    .regex(/^([a-z\\\\-]+)$/i, { message: 'Apenas letras e hífens' }),

  completeName: z.string().min(3, { message: 'Mínimo de 3 caracteres' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

  return (
    <Container onSubmit={handleSubmit(handleRegister)}>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </Header>
      <Form as="form">
        <label>
          <Text>Nome de usuário</Text>
          <TextInput
            prefix="ignite.com/"
            placeholder="seu-usuario"
            {...register('username')}
          />
          {errors.username && (
            <FormError size="xs">{errors.username.message}</FormError>
          )}
        </label>

        <label>
          <Text>Nome de completo</Text>
          <TextInput placeholder="seu nome" {...register('completeName')} />
          {errors.completeName && (
            <FormError size="xs">{errors.completeName.message}</FormError>
          )}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Próximo passo <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
