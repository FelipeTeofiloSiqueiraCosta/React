import { prismaClient } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { completeName, username } = req.body

  const userAlreadyExists = await prismaClient.user.findUnique({
    where: {
      username,
    },
  })

  if (userAlreadyExists) {
    return res.status(400).json({
      message: 'User already exists',
    })
  }

  const user = await prismaClient.user.create({
    data: {
      name: completeName,
      username,
    },
  })

  setCookie({ res }, '@ignitecall:userId', user.id, {
    // expires: new Date(),
    // maxAge significa quantos segundos esse cookie vai ficar vivo, posso passar ele ou o expires
    maxAge: 60 * 60 * 24 * 7, // 7 dias,
    // se eu quiser que um cookie seja global (todas as rotas podem acessar), é só eu passar um path: '/', caso eu colocasse path: '/test', o cookie somente estaria disponível para a rota /test
    path: '/',
  })

  return res.status(200).json(user)
}
