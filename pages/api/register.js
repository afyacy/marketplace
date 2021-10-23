import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export default async function handler (request, response) {
  const newUser = await prisma.company.create({
    data: {
      name: request.body.companyName,
      users: {
        create: [
          {
            fullName: request.body.fullName,
            email: request.body.email,
            password: await bcrypt.hash(request.body.password, 3)
          }
        ]
      }
    }
  })
  response.status(200).send(newUser)
}
