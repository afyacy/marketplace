//  pages/api/register.js
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export default async function handler (request, response) {
  // Process a POST request
  const newUser = await prisma.user.create({
    data: {
      email: request.body.email,
      name: request.body.fullName,
      password: bcrypt.hashSync(request.body.password)
    }
  })

  await prisma.company.create({
    data: {
      name: request.body.companyName
    }
  })
  response.status(200).send(newUser.email)
}
