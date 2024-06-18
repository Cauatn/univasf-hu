import React, { Suspense } from "react";
import { usePathname } from "next/navigation";
import prisma from "@/db";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

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

  return (
    <Suspense>
      <div className="flex space-x-2">
        <Avatar className="size-16">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>X</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">{paciente?.name}</h1>
          <Badge className="bg-green-400">{paciente?.status}</Badge>
        </div>
      </div>
    </Suspense>
  );
}

export default page;
