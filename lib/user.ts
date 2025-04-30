import { db } from "@/prisma/db";

export async function getUserById(id: string) {
   try {
    const user = await db.user.findUnique({
        where: {
            id,
        },
    });
    return user;
   } catch (error) {
    console.log(error);
    return null;
   }
}