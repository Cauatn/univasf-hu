import React from "react";
import prisma from "@/db";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { NotepadText, Terminal } from "lucide-react";
import { Card, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type PageProps = {
  params: {
    id: string;
  };
};

async function page({ params }: PageProps) {
  const id = params.id;

  const paciente = await prisma.pacient.findUnique({
    where: {
      id: id,
    },
  });

  if (!paciente) {
    return (
      <Alert>
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription>Paciente não encontrado</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="flex flex-col space-y-4 items-start">
      <div className="flex items-center justify-between w-full">
        <div className="flex space-x-4 items-center">
          <Avatar className="size-14">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>X</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="text-xl text-gray-800">{paciente.name}</h3>
            <div className="bg-gray-50 h-9 text-gray-500 flex flex-row justify-between items-center p-3 rounded-lg w-[250px]">
              <div className="flex flex-row items-center space-x-2">
                <NotepadText className="size-5" />
                <span>{paciente.medicalRecord}</span>
              </div>
              <a href="#" className="text-blue-500 font-bold">
                Editar
              </a>
            </div>
          </div>
        </div>
        <Button className="space-x-2" variant="secondary" disabled>
          <Terminal className="size-5" />
          <span>Atender</span>
        </Button>
      </div>
      <Separator />
      <div className="flex flex-row items-center justify-center space-x-2">
        <div className="w-1 h-6 bg-black transform"></div>
        <div>DADOS DO PACIENTE</div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col space-y-1">
          <label htmlFor="idade" className="text-gray-600">
            Idade
          </label>
          <span className="text-gray-800">
            {paciente.dateOfBirth.toDateString()}
          </span>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="idade" className="text-gray-600">
            Gênero
          </label>
          <span className="text-gray-800">{paciente.gender}</span>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="idade" className="text-gray-600">
            Telefone
          </label>
          <span className="text-gray-800">{paciente.phone}</span>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="idade" className="text-gray-600">
            Endereço
          </label>
          <span className="text-gray-800">{paciente.adress}</span>
        </div>
      </div>
      <Separator />
    </div>
  );
}

export default page;
