"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { use, useState } from "react";
import KeywordsInput from "./TagInput";
import prisma from "@/db";
import { useParams } from "next/navigation";
import { PageProps } from "../types";
import { createAllergy } from "@/actions/actions";

const formSchema = z.object({
  allergies: z.array(z.string()),
  restrictions: z.array(z.string()),
  history: z.array(z.string()),
});

export function InfoForm({ params }: PageProps) {
  const [keywords, setKeywords] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [history, setHistory] = useState([]);

  const url = useParams();
  console.log(url.id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      allergies: [],
      restrictions: [],
      history: [],
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const pacientId = Array.isArray(url.id) ? url.id[0] : url.id;

    for (let i = 0; i < values.allergies.length; i++) {
      let allergy = values.allergies[i];

      createAllergy(allergy, pacientId);
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="text-blue-500 font-bold">Editar</DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="restrictions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Restrições</FormLabel>
                  <FormControl>
                    <KeywordsInput
                      onKeywordsChange={(newKeywords: string[]) =>
                        field.onChange(newKeywords)
                      }
                      initialKeywords={keywords}
                    />
                  </FormControl>
                  <FormDescription>
                    Aqui deverá ser inserido as restrições alimentares do
                    paciente.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="allergies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alergias</FormLabel>
                  <FormControl>
                    <KeywordsInput
                      onKeywordsChange={(allergies: string[]) =>
                        field.onChange(allergies)
                      }
                      initialKeywords={allergies}
                    />
                  </FormControl>
                  <FormDescription>
                    Aqui deverá ser inserido as alergias do paciente.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="history"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Historico Medico</FormLabel>
                  <FormControl>
                    <KeywordsInput
                      onKeywordsChange={(history: string[]) =>
                        field.onChange(history)
                      }
                      initialKeywords={history}
                    />
                  </FormControl>
                  <FormDescription>
                    Doenças crônicas e condições atuais.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
