// /pages/api/users.js
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    try {
      const { cname, fname, email, password } = req.body;

      const result = await prisma.User.create({
        data: {
          name: fname,
          email: email,
          password: password,
        },
      });      
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({message: 'Something went wrong'})
    }
  } else {
    // Handle any other HTTP method
    return res.status(405).json({message: 'Method not allowed'});
  }
}


// export default async function users (req, res) {
//   if (req.method !== 'POST'){
//     return res.status(405).json({message: 'Method not allowed'});
//   }

//   try {
//     const { user } = req.body;
//     //const user: Prisma.UserCreateInput = JSON.parse(req.body);
//     const saveUser = await prisma.user.create({
//       data: user
//     });
//     res.status(200).json({saveUser})
//   } catch (error) {
//     res.status(400).json({message: 'Something went wrong'})
//   }
// }