import { db } from "@/prisma/db";

export async function getAccountByUserId(userId: string) {
   try {
    const account = await db.account.findFirst({
        where: {
            userId,
        },
    });
    return account;
   } catch (error) {
    console.log(error)
    return null;
   }
}