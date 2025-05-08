"use server"
import { RegisterSchema } from "@/lib/zod";
import { z } from "zod";
import { db } from "@/prisma/db";
import { hash } from "bcryptjs";

export async function registerUser(data: z.infer<typeof RegisterSchema>) {
    // Validate the data using Zod schema
   try {
    const validatedData = RegisterSchema.parse(data);

    if (!validatedData) {
        return{
            error: "Invalid input data",
        }
    }
    const {name , email, password, confirmPassword} = validatedData;

    if (password !== confirmPassword) {
        return {
            error: "Passwords do not match",
        };
    }
    const hashedPassword = await hash(password, 10);
   const userExists = await db.user.findFirst({
        where: {
            email,
        }
   });
   if (userExists) {
       return {
           error: "User already exists",
       };
   }

   const lowerCaseEmail = email.toLowerCase();
   const newUser = await db.user.create({
       data: {
           name,
           email: lowerCaseEmail,
           password: hashedPassword,
       },
   });

   return {
       success: "User registered successfully",
    //    user: newUser,
   };
   } catch (error) {
    
       console.error("Registration error:", error);
       return {
           error: "Registration failed",
       };
   }
}