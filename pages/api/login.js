// /pages/api/login.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(request, response) {
    if (request.method === 'POST') {
        // Process a POST request
        const {email, password } = request.body;

        const user = await prisma.user.findFirst({
            where: {
                email: email,
            }
        });
        if (user) {
            response.status(200).json({ message: 'User Found' })
        } else {
            response.status(200).json({ message: 'User not found' }) 
        }

    }
}