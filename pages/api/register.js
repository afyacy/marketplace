
import prisma from '../../lib/prisma'
import bcrypt from 'bcryptjs'

export default async function handler (request, response) {
  const { mediaUrl, fullName, companyName, email, password, category, mobile, town, city, region, description } = request.body
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = await bcrypt.hashSync(password, salt)

  const newUser = await prisma.company.create({
    data: {
      name: companyName,
      users: {
        create: [
          {
            fullName: fullName,
            email: email,
            password: hashedPassword,
            category: category,
            mobile: mobile,
            mediaUrl: mediaUrl,
            town: town,
            city: city,
            region: region,
            description: description
          }
        ]
      }
    }
  })
  response.status(200).send(newUser)
}
