"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import prisma from "@/db";
import { createPacient } from "@/actions/actions";

function PacientForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-500">Adicionar novo paciente</Button>
      </DialogTrigger>
      <DialogContent className={cn("left-[78%] top-[50%]")}>
        <DialogHeader>
          <h2 className="text-xl font-bold">
            Formulario de cadastro de novo paciente
          </h2>
        </DialogHeader>
        <div>
          <form
            className="flex flex-col space-y-4 max-h-screen overflow-y-scroll min-h-fit"
            action={createPacient}
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Nome do paciente</label>
              <input
                type="text"
                name="name"
                id="name"
                className="p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="grid grid-flow-col auto-cols-min justify-around">
              <div>
                <label htmlFor="phone">Telefone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="p-2 border border-gray-300 rounded-lg h-9"
                />
              </div>
              <div className="flex flex-col justify-between">
                <label htmlFor="gender">Gênero do paciente</label>
                <Select name="gender">
                  <SelectTrigger id="gender" className="w-[150px]">
                    <SelectValue placeholder="Gênero" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="homem">Homem</SelectItem>
                    <SelectItem value="mulher">Mulher</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col justify-between">
                <label htmlFor="color-skin">Cor</label>
                <Select>
                  <SelectTrigger id="color-skin" className="w-[70px]">
                    <SelectValue placeholder="Cor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="preto">Preto</SelectItem>
                    <SelectItem value="pardo">Pardo</SelectItem>
                    <SelectItem value="branco">Branco</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="adress">Endereço</label>
              <input
                type="text"
                name="adress"
                id="adress"
                className="p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="medicalRecord">Prontuário médico</label>
              <input
                type="text"
                name="medicalRecord"
                id="medicalRecord"
                className="p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="dateOfBirth">Data de nascimento</label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className="p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="room">Sala</label>
              <input
                type="text"
                name="room"
                id="room"
                className="p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="treatment">Tratamento</label>
              <input
                type="text"
                name="treatment"
                id="treatment"
                className="p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-row justify-end space-x-4">
              <DialogClose asChild>
                <Button variant="destructive">Cancelar</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  variant="default"
                  className="bg-green-400"
                  type="submit"
                >
                  Salvar
                </Button>
              </DialogClose>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PacientForm;
