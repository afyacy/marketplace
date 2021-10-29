import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler (request, response) {
  const { name, email, title, location, startDate, endDate, userId } = request.body
  await prisma.event.create({
    data: {
      title: title,
      location: location,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      user: { connect: { id: userId } },
      attendees: {
        create: [
          {
            name: name,
            email: email
          }
        ]
      }
    }
  })
  response.status(200).send('Success')
}
