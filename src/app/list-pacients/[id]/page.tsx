"use client";

import React from "react";
import { usePathname } from "next/navigation";
import prisma from "@/db";

async function page() {
  const id = usePathname().replace("/list-pacients/", "").replace("/", "");

  const pacient = await prisma.pacient.findUnique({
    where: {
      id: id,
    },
  });

  if (!pacient) {
    return <div>User not Found</div>;
  }

  return (
    <div>
      {!pacient ? (
        <div>loading...</div>
      ) : (
        <div>
          <h1>{pacient.name}</h1>
          <p>{pacient.phone}</p>
          <p>{pacient.room}</p>
          <p>{pacient.treatment}</p>
          <p>{pacient.status}</p>
        </div>
      )}
    </div>
  );
}

export default page;
