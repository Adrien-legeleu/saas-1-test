import { Button } from "@/components/ui/button";
import React from "react";

export default function ButtonProvider() {
  return (
    <div className="flex flex-col space-y-4">
      <Button>Continuer avec Google</Button>
      <Button>Continuer avec GitHub</Button>
    </div>
  );
}
