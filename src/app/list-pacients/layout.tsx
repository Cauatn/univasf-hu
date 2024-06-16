import PacientForm from "@/components/PacientForm";
import { Button } from "@/components/ui/button";
import prisma from "@/db";
import { UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactElement;
};

async function Layout({ children }: Props) {
  return (
    <main className="flex flex-col min-h-screen px-24 py-12 ">{children}</main>
  );
}

export default Layout;
