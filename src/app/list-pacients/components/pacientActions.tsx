"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import React from "react";
import { Button } from "@/components/ui/button";
import { MoveHorizontalIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function PacientActions({ pacient }: { pacient: any }) {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoveHorizontalIcon className="w-4 h-4" />
          <span className="sr-only">Actions</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <a href={`/list-pacients/${pacient.id}`}>Ver Pacientes</a>
        </DropdownMenuItem>
        <DropdownMenuItem>Update Status</DropdownMenuItem>
        <DropdownMenuItem>Discharge</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default PacientActions;
