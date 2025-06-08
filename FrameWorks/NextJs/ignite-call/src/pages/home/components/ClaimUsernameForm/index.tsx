import React from 'react'
import { Form } from './styles'
import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  username: z.string().min(3, { message: 'Mínimo de 3 caracteres' }),
})

// Convertendo o schema para um tipo
type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  const handleClaimUsername = (data: ClaimUsernameFormData) => {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuario"
        required
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
