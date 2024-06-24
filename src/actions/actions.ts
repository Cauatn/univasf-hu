"use server";

import prisma from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPacient(formData: FormData) {
  const dateOfBirthString = formData.get("dateOfBirth") as string;
  const dateOfBirth = new Date(dateOfBirthString);

  const _room = Number(formData.get("room"));
  const _phone = Number(formData.get("phone"));

  await prisma.pacient.create({
    data: {
      name: formData.get("name") as string,
      phone: _phone,
      adress: formData.get("adress") as string,
      dateOfBirth: dateOfBirth,
      status: formData.get("status") as string,
      room: _room,
      treatment: formData.get("treatment") as string,
      medicalRecord: formData.get("medicalRecord") as string,
      gender: formData.get("gender") as string,
    },
  });

  redirect("/app/list-pacients");
}
