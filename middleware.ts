// middleware.ts
import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { privateRoutes } from "@/lib/utils"
// import { auth } from "./auth"
 
export const { auth } = NextAuth(authConfig)

export default auth(async (req) => {
    const baseUrl = process.env.NEXT_PUBLIC_URL
    const isLoggedIn = !!req.auth;
    const { nextUrl } = req;

    const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
    const isAuthRoute = nextUrl.pathname.includes("/login") || nextUrl.pathname.includes("/register"); 
    const isApiRoute = nextUrl.pathname.includes('/api')

    if(isApiRoute) return;

    if(isLoggedIn && isAuthRoute) {
        return Response.redirect(`${baseUrl}/dashboard`);
    }

    if(isAuthRoute && !isLoggedIn) return

    if (!isLoggedIn && isPrivateRoute){
        return Response.redirect(`${baseUrl}/login`);
    }

}) 

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/api/dashboard/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
