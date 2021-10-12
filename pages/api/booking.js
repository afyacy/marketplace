import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler (request, response) {
  await prisma.event.create({
    data: {
      startDate: new Date(Date.parse(request.body.data.startDate)),
      endDate: new Date(Date.parse(request.body.data.endDate)),
      name: request.body.data.eventName,
      user: request.body.data.companyEmail,
      attendees: {
        create: [
          { email: request.body.data.email, name: request.body.data.name }
        ]
      }
    }
  })
  response.status(200).send('Success')
}
