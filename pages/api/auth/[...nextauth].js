import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const configuration = {
  providers: [
    Providers.Credentials({
      id: 'credentials',
      name: 'Login',
      async authorize (credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  session: {
    jwt: true
  }
}

export default (request, response) => NextAuth(request, response, configuration)
