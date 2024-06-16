"use client";

import React from "react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { createPacient } from "@/actions/actions";

function PacientForm() {
  return (
    <form
      className="flex flex-col space-y-4 max-h-screen overflow-y-scroll min-h-fit"
      action={createPacient}
    >
      <div className="grid grid-cols-5 justify-between space-x-4">
        <div className="flex flex-col space-y-2 col-span-3">
          <label htmlFor="name">Nome do paciente</label>
          <input
            type="text"
            name="name"
            id="name"
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
          <label htmlFor="status">Status</label>
          <Select name="status">
            <SelectTrigger id="status" className="w-[100px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="estavel">
                <div className="flex flex-row space-x-1 items-center">
                  <div className="rounded-full bg-emerald-400 size-2"></div>
                  <span>Estavel</span>
                </div>
              </SelectItem>
              <SelectItem value="instavel">
                <div className="flex flex-row space-x-1 items-center">
                  <div className="rounded-full bg-red-400 size-2"></div>
                  <span>Instavel</span>
                </div>
              </SelectItem>
              <SelectItem value="observação">
                <div className="flex flex-row space-x-1 items-center">
                  <div className="rounded-full bg-orange-400 size-2"></div>
                  <span>Em observação</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-flow-col auto-cols-min justify-between">
        <div className="flex flex-col justify-between">
          <label htmlFor="phone">Telefone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="p-2 border border-gray-300 rounded-lg h-9"
          />
        </div>
        <div className="flex flex-col justify-between">
          <label htmlFor="gender">Sexo</label>
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
        <div className="flex flex-col space-y-2">
          <label htmlFor="dateOfBirth">Data de nascimento</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            className="p-2 border border-gray-300 rounded-lg"
          />
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
        <label htmlFor="treatment">Tratamento</label>
        <input
          type="text"
          name="treatment"
          id="treatment"
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex flex-row justify-end space-x-4">
        <Button variant="destructive">Cancelar</Button>
        <Button variant="default" className="bg-green-400" type="submit">
          Salvar
        </Button>
      </div>
    </form>
  );
}

export default PacientForm;
