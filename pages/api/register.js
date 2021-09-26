//  pages/api/register.js
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export default async function handler (request, response) {
  // Process a POST request
  const newUser = await prisma.user.create({
    data: {
      companyId: 2,
      email: request.body.email,
      name: request.body.fullName,
      password: await bcrypt.hashSync(request.body.password)
    }
  })
  response.status(200).send(newUser.email)
}
