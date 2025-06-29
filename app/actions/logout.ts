"use server";
import { deleteSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export async function logoutUser() {
  await deleteSession();
  revalidatePath("/");
  return { success: true, redirect: "/login?loggedOut=1" };
}
