"use server"

import { LoginSchema } from "@/lib/zod";
import { db } from "@/prisma/db";

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

    return {
        error: "Authentication is disabled in this project."
    };
}