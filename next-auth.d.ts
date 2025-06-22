import NextAuth from "next-auth";
import { UserRole } from "@prisma/client";
import type { User } from "next-auth";
import "next-auth/jwt";
type UserId = string;