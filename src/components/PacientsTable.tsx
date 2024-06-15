import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoveHorizontalIcon } from "lucide-react";
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

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

async function PacientsTable() {
  const pacients = await prisma.pacient.findMany();

  return (
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
        {pacients.map((pacient) => {
          return (
            <TableRow key={pacient.id}>
              <TableCell>{pacient.name}</TableCell>
              <TableCell>{pacient.phone}</TableCell>
              <TableCell>{pacient.medicalRecord}</TableCell>
              <TableCell>Dia entrada</TableCell>
              <TableCell>{dayjs().to(pacient.dateOfBirth)}</TableCell>
              <TableCell>{pacient.room}</TableCell>
              <TableCell>{pacient.treatment}</TableCell>
              <TableCell>
                <Badge variant="secondary" className="bg-green-200">
                  Stable
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoveHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Patient</DropdownMenuItem>
                    <DropdownMenuItem>Update Status</DropdownMenuItem>
                    <DropdownMenuItem>Discharge</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default PacientsTable;
