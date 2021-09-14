// /pages/api/register.js
import { PrismaClient } from '@prisma/client'
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(request, response) {
    if (request.method === 'POST') {
        // Process a POST request
        const { companyName, fullName, email, password } = request.body;

        const user = await prisma.user.findFirst({
            where: {
                email: email,
            }
        });
        if (user) {
            response.status(200).json({ message: 'User Already exists' })
        } else {
            const newUser = await prisma.user.create({
                data: {
                    companyId: 2,
                    email: email,
                    name: fullName,
                    password: await bcrypt.hash(password, 10)
                }
            });
            if(newUser){
                response.status(200).json({ message: 'New user created.' })
            }else {
                response.status(200).json({ message: 'Could not create a new user.' })
            }
            
        }

    }
}
  