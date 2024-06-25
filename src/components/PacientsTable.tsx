"use server";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoveHorizontalIcon, UserRound } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import { Badge } from "./ui/badge";

import prisma from "@/db";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import PacientActions from "@/app/list-pacients/components/pacientActions";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

async function PacientsTable() {
  const pacients = await prisma.pacient.findMany();
  const pacientsLenght = await prisma.pacient.count();

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-3xl font-bold">Lista de Todos os pacientes</h1>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row space-x-2 items-center">
          <div className="flex flex-row items-center space-x-1">
            <UserRound className="size-9 p-2 bg-gray-100 text-gray-700 rounded-lg" />
            <span className="text-2xl">{pacientsLenght}</span>
          </div>
          <span className="text-gray-500 text-lg">Quantidade de pacientes</span>
        </div>
        <Link href="/add-pacient">
          <Button className="bg-blue-500">Adicionar novo paciente</Button>
        </Link>
      </div>
      <Table className="border rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Nome paciente</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Prontuário</TableHead>
            <TableHead>Entrada</TableHead>
            <TableHead>Idade</TableHead>
            <TableHead>Sala</TableHead>
            <TableHead>Tratamento</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!pacients ? (
            <TableRow>
              <TableCell colSpan={8}>Carregando...</TableCell>
            </TableRow>
          ) : (
            pacients.map((pacient) => {
              return (
                <TableRow key={pacient.id}>
                  <TableCell>{pacient.name}</TableCell>
                  <TableCell>{pacient.phone.toString()}</TableCell>
                  <TableCell>{pacient.medicalRecord}</TableCell>
                  <TableCell>Dia entrada</TableCell>
                  <TableCell>{dayjs().to(pacient.dateOfBirth)}</TableCell>
                  <TableCell>{pacient.room.toString()}</TableCell>
                  <TableCell>{pacient.treatment}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        pacient.status === "estavel"
                          ? "bg-emerald-300"
                          : pacient.status === "instavel"
                          ? "bg-red-400"
                          : "bg-orange-300"
                      }
                    >
                      {pacient.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <PacientActions pacient={pacient} />
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default PacientsTable;
