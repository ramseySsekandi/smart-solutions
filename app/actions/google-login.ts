"use server"

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function googleLogin() {
    const baseUrl = process.env.NEXT_PUBLIC_URL
    try {
        await signIn("google", {redirectTo: `${baseUrl}/dashboard`});
    } catch (error) {
        console.log(error)
        if(error instanceof AuthError) {
            // switch (error.type) {
            //     case "OAuthCallbackError":
            //         return {
            //             error: "Invalid credentials",
            //         };
            //     default:
            //         return {
            //             error: "Please Verify your email address",
            //         };
            // }
            return {
                error: "Google login failed",
            };
        }

        throw error
    }

    return {
        success: "User logged in successfully",
    };
}