import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from "./prisma/db"
import { getUserById } from "./lib/user"
import { getAccountByUserId } from "./lib/account"
 
export const { auth, signIn, signOut, handlers } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    async signIn({user, account}) {
      if(account?.provider !== "credentials") {
        return true
      }
      const existingUser = await getUserById(user.id ?? "");

      // if(!existingUser?.emailVerified) return false;

      return true;

    },
    async jwt({ token }) {
      if(!token.sub) return token;

      // Get the user from the database
      const existingUser = await getUserById(token.sub as string);

      if(!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id)
      token.isOauth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.image = existingUser.image;
      token.id = existingUser.id;
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          isOauth: token.isOauth,
        },
      }

    }
  },
})