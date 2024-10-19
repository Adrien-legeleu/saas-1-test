"use client";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";

export default function ButtonProvider() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Button className="flex items-center gap-2">
          <Mail />
          <span>Continuer avec Google</span>
        </Button>
        <Button
          className="flex items-center gap-2"
          onClick={() => signIn("github")} // Important : Spécifie bien "github"
        >
          <span>Continuer avec GitHub</span>
        </Button>
      </div>
    </>
  );
}
