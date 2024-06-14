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
  SheetClose,
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

const SheetItems = [
  {
    title: "Adicionar novo paciente",
    href: "/add-pacient",
    icon: CirclePlus,
  },
  {
    title: "Ver Lista de pacientes",
    href: "/list-pacients",
    icon: ClipboardList,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="br">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-[1560px] mx-auto"
        )}
      >
        <header className="flex p-4 bg-green-700 justify-between">
          <div className="flex space-x-4 items-center justify-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="text-white" />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex flex-col [&>*]:text-gray-500"
              >
                <SheetHeader>
                  <h2 className="text-xl font-bold text-black">Menu</h2>
                </SheetHeader>
                {SheetItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center space-x-2 hover:bg-gray-100 p-2 [&>*]:hover:text-black"
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                ))}
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
