import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const configuration = {
    providers: [
        Providers.Credentials({
            id: 'credentials',
            name: "Login",
            async authorize(credentials) {
                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email,
                        password: credentials.password
                    }
                });

                if (user)
                {
                    return user;
                }
                else {
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: "/login"
    },
    session: {
        jwt: true,
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (request, response) => NextAuth(request, response, configuration)