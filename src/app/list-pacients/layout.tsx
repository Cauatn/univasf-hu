import PacientForm from "@/components/PacientForm";
import prisma from "@/db";
import { UserRound } from "lucide-react";
import React from "react";

async function Layout({ children }: { children: React.ReactNode }) {
  const pacientsLenght = await prisma.pacient.count();

  return (
    <main className="flex min-h-screen flex-col px-24 py-12 space-y-4">
      <h1 className="text-3xl font-bold">Lista de Todos os pacientes</h1>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row space-x-2 items-center">
          <div className="flex flex-row items-center space-x-1">
            <UserRound className="size-9 p-2 bg-gray-100 text-gray-700 rounded-lg" />
            <span className="text-2xl">{pacientsLenght}</span>
          </div>
          <span className="text-gray-500 text-lg">Quantidade de pacientes</span>
        </div>
        <PacientForm />
      </div>
      {children}
    </main>
  );
}

export default Layout;
