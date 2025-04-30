"use server"

import { signIn } from "@/auth";
import { LoginSchema } from "@/lib/zod";
import { db } from "@/prisma/db";
import { AuthError } from "next-auth";

export async function loginUser(data: { email: string; password: string }) {
    // Validate the data on Server with zod
    const validatedData = await LoginSchema.parseAsync(data);
    if (!validatedData) {
        return {
            error: "Invalid Input data",
        };
    }
    // Destructure the data
    const { email, password } = validatedData;

    // Check if the user exists in the database
    const userExists = await db.user.findFirst({
        where: {
            email,
        },
    });


    if (!userExists || !userExists.password || !userExists.email) {
        return {
            error: "User not found",
        };
    }

    try {
        const baseUrl = process.env.NEXT_PUBLIC_URL
        await signIn("credentials", {
            email: userExists.email,
            password,
            redirectTo: `${baseUrl}/dashboard`,
        });
    } catch (error) {
        console.log(error)
        if(error instanceof AuthError) {
            
            switch (error.type) {
                case "CredentialsSignin":
                    return {
                        error: "Invalid credentials",
                    };
                default:
                    return {
                        error: "Please Verify your email address",
                    };
            }
        }

        throw error
    }

    return {
        success: "User logged in successfully",
    };
}