import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  BedIcon,
  FilePenIcon,
  MoveHorizontalIcon,
  TrashIcon,
} from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import prisma from "@/db";

async function page() {
  const pacients = await prisma.pacient.findMany();

  return (
    <main className="flex min-h-screen flex-col px-24 py-12 space-y-4">
      <h1 className="text-3xl font-bold">Lista de Todos os pacientes</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-4">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Leitos dísponiveis</CardTitle>
            <BedIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">342</div>
            <p className="text-gray-500 dark:text-gray-400">
              -2.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Available Beds</CardTitle>
            <BedIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">342</div>
            <p className="text-gray-500 dark:text-gray-400">
              -2.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Available Beds</CardTitle>
            <BedIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">342</div>
            <p className="text-gray-500 dark:text-gray-400">
              -2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Idade</TableHead>
            <TableHead>Diagnostico</TableHead>
            <TableHead>Sala</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pacients.map((pacient) => (
            <TableRow>
              <TableCell>{pacient.name}</TableCell>
              <TableCell>{pacient.phone}</TableCell>
              <TableCell>{pacient.MedicalRecord}</TableCell>
              <TableCell>{JSON.stringify(pacient.dateOfBirth)}</TableCell>
              <TableCell>
                <Badge variant="secondary">Stable</Badge>
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
          ))}
          <TableRow>
            <TableCell>Sarah Lee</TableCell>
            <TableCell>27</TableCell>
            <TableCell>Broken Leg</TableCell>
            <TableCell>207</TableCell>
            <TableCell>
              <Badge variant="secondary">Stable</Badge>
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
        </TableBody>
      </Table>
    </main>
  );
}

export default page;
