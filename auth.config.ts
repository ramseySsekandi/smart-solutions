import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "./lib/zod"
import { db } from "./prisma/db"
// import bcrypt from "bcryptjs/umd/types"
import bcrypt from "bcryptjs"

export default { 
    secret: process.env.NEXTAUTH_SECRET,
    providers: [GitHub({
        // We can include the clientId and clientSecret here, but in v5 it can be auto detected if it has AUTH_ like in example 2
        clientId: process.env.AUTH_GITHUB_ID ?? "",
        clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
    }),
    Google({
        clientId: process.env.AUTH_GOOGLE_ID ?? "",
        clientSecret: process.env.AUTH_GOOGLE_SECRET ?? "",
    }),
    Credentials({
      async authorize(credentials) {
        const validatedData = LoginSchema.safeParse(credentials);
        if (!validatedData.success) return null
        const { email, password } = validatedData.data;
        // Authorize the user
        const user = await db.user.findFirst({
            where: {
                email,
            },
        });

        if (!user || !user.password || !user.email) {
            return null;
        }
        // Check if the password is correct
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (passwordsMatch) {
            return user;
        }
        // Return the user object if the password is correct
        return null
      }
    }),
    ] 
} satisfies NextAuthConfig