import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CirclePlus, ClipboardList, Menu, RefreshCcw } from "lucide-react";
import { Inter as FontSans } from "next/font/google";
import Logo from "../../public/univasf-logo.png";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "HU - Centro de cuidado",
  description: "Centro de monitoramento do HU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="br">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <header className="flex p-4 bg-blue-700 justify-between">
          <div className="flex space-x-4 items-center justify-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="text-white" />
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col space-y-2">
                <SheetHeader>
                  <h2 className="text-xl font-bold">Menu</h2>
                </SheetHeader>
                <a href="/add-pacient" className="flex space-x-2">
                  <CirclePlus className="text-gray-500" />
                  <span>Adicionar novo paciente</span>
                </a>
                <a href="/list-pacients" className="flex space-x-2">
                  <ClipboardList className="text-gray-500" />
                  <span>Ver Lista de pacientes</span>
                </a>
              </SheetContent>
            </Sheet>
            <div className="text-xl font-bold text-white">
              Centro de cuidado HU
            </div>
          </div>
          <div className="flex space-x-4 items-center justify-between">
            <Image src={Logo} alt="Logo" className="w-[100px]"></Image>
            <a href="/" className="h-fit w-fit">
              <RefreshCcw className="text-white" />
            </a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
