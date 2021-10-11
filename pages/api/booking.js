import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler (request, response) {
  await prisma.attendee.create({
    data: {
      email: request.body.data.email,
      name: request.body.data.name
    }
  })

  await prisma.event.create({
    data: {
      startDate: request.body.data.startDate,
      endDate: request.body.data.endDate,
      name: request.body.data.eventName,
      user: request.body.data.companyEmail
    }
  })
  response.status(200).send('Success')
}
