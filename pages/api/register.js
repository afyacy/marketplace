
import prisma from '../../lib/prisma'
import bcrypt from 'bcryptjs'

export default async function handler (request, response) {
  const newUser = await prisma.company.create({
    data: {
      name: request.body.companyName,
      users: {
        create: [
          {
            fullName: request.body.data.fullName,
            email: request.body.data.email,
            password: await bcrypt.hash(request.body.data.password, 3),
            category: request.body.data.category,
            mobile: request.body.data.mobile,
            town: request.body.data.town,
            city: request.body.data.city,
            region: request.body.data.region
          }
        ]
      }
    }
  })
  response.status(200).send(newUser)
}
