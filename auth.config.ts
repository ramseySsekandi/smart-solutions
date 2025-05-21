import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";
import { LoginSchema } from "./lib/zod";
import { db } from "./prisma/db";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// This is just the config object - not the full Auth.js instance
export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Credentials({
        async authorize (credentials) {
        const validatedData = await LoginSchema.safeParse(credentials);
        if (!validatedData.success) {   
          return null;
        }
        const { email, password } = validatedData.data;
        const user = await db.user.findUnique({
          where: {
            email,
          },
        });
        if (!user || !user.password || !user.email) {
          return null;
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {  
            return {
                id: user.id,
                name: user.name,
                email: user.email, // Ensure email is non-nullable
                image: user.image,
                role: user.role,
            };
        }
        return null;  
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    }

  }
} satisfies NextAuthConfig