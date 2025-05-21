import NextAuth from "next-auth";
import { UserRole } from "@prisma/client";
import type { User } from "next-auth";
import "next-auth/jwt";
type UserId = string;

declare module "next-auth" {
    interface User {
        id: string;
        role: UserRole;
        email: string;
        name: string | null;
    }
    
    interface Session {
        user: User & {
            id: string;
            role: UserRole;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        role: UserRole;
    }
}