import PacientForm from "@/components/PacientForm";
import { Button } from "@/components/ui/button";
import prisma from "@/db";
import { UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col px-24 py-12 space-y-4">
      <h1 className="text-3xl font-bold">Cadastro de novo paciente</h1>
      {children}
    </main>
  );
}

export default Layout;
