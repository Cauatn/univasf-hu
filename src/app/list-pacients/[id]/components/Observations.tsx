"use client";

import React, { Fragment, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Building, Milk } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { InfoForm } from "./InfoForm";

function Observations(props: any) {
  const check = (v?: string | number | boolean | null) => {
    return v !== undefined && v !== null;
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      <span className="text-blue-500 font-bold text-xl">
        Paciente Atualmente ATIVO
      </span>
      <div className="grid grid-cols-4 w-full gap-4">
        <Card className="flex flex-col gap-2 p-4 bg-[#E8F0F8] text-sm col-span-2">
          <div className="flex flex-row justify-between">
            <div className="text-[#646870] font-medium">
              Informações importantes sobre o paciente
            </div>
            <InfoForm />
          </div>
          <div className="flex flex-col flex-wrap gap-3">
            <div className="font-medium">Restrições alimentares</div>
            <InfoRow
              icon={<Milk />}
              label="intolerância à lactose"
              clipboardButton={check("shelter.name")}
            />
          </div>
          <div className="flex flex-col flex-wrap gap-3">
            <div className="font-medium">Alergias</div>
            <InfoRow
              icon={<Milk />}
              label="intolerância à lactose"
              clipboardButton={check("shelter.name")}
            />
          </div>
          <div className="flex flex-col flex-wrap gap-3">
            <div className="font-medium">
              Histórico Médico (Doenças crônicas e condições atuais)
            </div>
            <InfoRow
              icon={<Milk />}
              label="intolerância à lactose"
              clipboardButton={check("shelter.name")}
            />
          </div>
        </Card>
        <div className="col-span-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Horários das Refeições</TableCell>
                <TableCell>Refeição 1</TableCell>
                <TableCell>Refeição 2</TableCell>
                <TableCell>Refeição 3</TableCell>
                <TableCell>Refeição 4</TableCell>
                <TableCell>Refeição 5</TableCell>
                <TableCell>Refeição 6</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">Manhã</TableCell>
                <TableCell>Arroz</TableCell>
                <TableCell>Feijão</TableCell>
                <TableCell>Macarrão</TableCell>
                <TableCell>Carne</TableCell>
                <TableCell>Salada</TableCell>
                <TableCell>Sobremesa</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Tarde</TableCell>
                <TableCell>Arroz</TableCell>
                <TableCell>Feijão</TableCell>
                <TableCell>Macarrão</TableCell>
                <TableCell>Carne</TableCell>
                <TableCell>Salada</TableCell>
                <TableCell>Sobremesa</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Noite</TableCell>
                <TableCell>Arroz</TableCell>
                <TableCell>Feijão</TableCell>
                <TableCell>Macarrão</TableCell>
                <TableCell>Carne</TableCell>
                <TableCell>Salada</TableCell>
                <TableCell>Sobremesa</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function InfoRow(props: any, ref: any) {
  const {
    icon,
    label,
    value,
    clipboardButton = false,
    className = "",
    ...rest
  } = props;
  const isLink = value;
  const ValueComp = !value ? (
    <Fragment />
  ) : isLink ? (
    <a
      href={value}
      className="text-blue-500 break-all cursor-pointer hover:underline"
    >
      {value}
    </a>
  ) : (
    <h1 className="font-semibold">{value}</h1>
  );

  return (
    <div
      className={cn(
        "flex items-start gap-2 font-medium w-full",
        "md:flex",
        className
      )}
      {...rest}
    >
      {React.cloneElement(icon as any, {
        className: "min-w-5 min-h-5 w-5 h-5 stroke-muted-foreground",
      })}
      <div className={cn("flex flex-col gap-2 items-start", "sm:flex-row")}>
        <span className={cn("font-normal", value ? "text-nowrap" : "")}>
          {label}
        </span>
        <span className="md:flex">
          {ValueComp}
          {clipboardButton && value && (
            <div
              className="text-blue-600 mx-2 hover:cursor-pointer active:text-blue-800"
              onClick={() => navigator.clipboard.writeText(value)}
            >
              copiar
            </div>
          )}
        </span>
      </div>
    </div>
  );
}

export default Observations;
