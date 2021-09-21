//  pages/api/register.js
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export default async function handler (request, response) {
  if (request.method === 'POST') {
    // Process a POST request
    const { fullName, email, password } = request.body
    const user = await prisma.user.findFirst({
      where: {
        email: email
      }
    })
    if (user) {
      response.send(406).json({ message: 'User Already exists' })
    } else {
      const newUser = await prisma.user.create({
        data: {
          companyId: 2,
          email: email,
          name: fullName,
          password: await bcrypt.hash(password, 10)
        }
      })
      if (newUser) {
        response.send(200).json({ message: 'New user created.' })
      } else {
        response.send(417).json({ message: 'Could not create a new user.' })
      }
    }
  }
}
