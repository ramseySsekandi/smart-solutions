"use server"

import { LoginSchema } from "@/lib/zod";
import { db } from "@/prisma/db";
import { compare } from "bcryptjs";
import { createSession } from "@/lib/session";

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
    const user = await db.user.findFirst({
        where: {
            email,
        },
    });

    if (!user || !user.password) {
        return {
            error: "User not found",
        };
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
        return {
            error: "Invalid password",
        };
    }

    // Create session after successful login
    await createSession(user.id);

    return {
        success: "Login successful",
    };
}