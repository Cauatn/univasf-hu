"use server";

import prisma from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPacient(formData: FormData) {
  const dateOfBirthString = formData.get("dateOfBirth") as string;
  const dateOfBirth = new Date(dateOfBirthString);

  await prisma.pacient.create({
    data: {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      adress: formData.get("adress") as string,
      dateOfBirth: dateOfBirth,
      status: formData.get("status") as string,
      room: formData.get("room") as string,
      treatment: formData.get("treatment") as string,
      medicalRecord: formData.get("medicalRecord") as string,
      gender: formData.get("gender") as string,
    },
  });

  redirect("/app/list-pacients");
}
