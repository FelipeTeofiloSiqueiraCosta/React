import { prismaClient } from '@/src/lib/prisma'

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { completeName, username } = req.body

  const user = await prismaClient.user.create({
    data: {
      name: completeName,
      username,
    },
  })

  return res.status(200).json(user)
}
