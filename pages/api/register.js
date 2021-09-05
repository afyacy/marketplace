// /pages/api/users.js
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(request, response) {
  if (request.method === 'POST') {
    // Process a POST request

      const { companyName, fullName, email, password } = request.body;

      const result = await prisma.User.create({
        data: {
          companyId: 1,
          name: fullName,
          email: email,
          password: password,
        },
      });      
    return res.status(200).json({message: response});
  } else {
    // Handle any other HTTP method
    return res.status(405).json({message: 'Method not allowed'});
  }
}
