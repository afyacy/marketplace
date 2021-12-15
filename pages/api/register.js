
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export default async function handler (request, response) {
  console.log(request)
  // const newUser = await prisma.company.create({
  //   data: {
  //     name: request.body.companyName,
  //     users: {
  //       create: [
  //         {
  //           fullName: request.body.fullName,
  //           email: request.body.email,
  //           password: await bcrypt.hash(request.body.password, 3)
  //         }
  //       ]
  //     }
  //   }
  // })
  response.status(200).send('newUser')
}

// body: {
//   mediaUrl: 'http://res.cloudinary.com/afyacy/image/upload/v1639547304/tjtrrpvmm22d0zpirvjp.png',
//   data: {
//     fullName: 'Charity Darko',
//     companyName: 'Vestir Mart',
//     password: '111111',
//     repeatPassword: '111111',
//     category: '3',
//     mobile: '0501431357',
//     town: 'Asokwa',
//     city: 'Kumasi',
//     region: '2'
//   }