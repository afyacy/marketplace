import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler (request, response) {
  //  For Some reason the variables end up being undefined inside prisma instantiation
  //  Kindly check if I am doing something uncalled for
  //  const { name, email, title, location, startDate, endDate, userId } = request.body
  await prisma.event.create({
    data: {
      title: 'Makeup',
      location: 'Asokwa',
      startDate: new Date('09/12/2021'),
      endDate: new Date('09/12/2021'),
      user: { connect: { id: 1 } },
      attendees: {
        create: [
          {
            name: 'Roda',
            email: 'roda@menubar.com'
          }
        ]
      }
    }
  })
  response.status(200).send('Success')
}
