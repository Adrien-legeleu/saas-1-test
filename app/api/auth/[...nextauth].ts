import NextAuth from "next-auth";
import { authOptions } from "@/auth"; // Chemin vers ton fichier auth.ts

export default NextAuth(authOptions);
