import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
 
export default { 
    providers: [GitHub({
        // We can include the clientId and clientSecret here, but in v5 it can be auto detected if it has AUTH_ like in example 2
        clientId: process.env.AUTH_GITHUB_ID ?? "",
        clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
    }),
    Google({
    }),
    Credentials({
        
    }),
    ] 
} satisfies NextAuthConfig