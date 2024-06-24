import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const date = new Date();

  return (
    <main className="flex min-h-screen flex-col px-24 py-8 space-y-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-4xl ">Bem Vindo(a) - Cauã 👋</h1>
        <div className="flex flex-row space-x-4 items-center justify-start">
          <Link href="/add-pacient">
            <button className="bg-blue-500 text-white font-bold px-2 py-1 rounded-md text-sm w-full h-full">
              Dashboard
            </button>
          </Link>
          <Link href="/list-pacients">
            <button className=" font-bold px-2 py-1 rounded-md w-full h-full">
              Lista pacientes
            </button>
          </Link>
          <Link href="/add-pacient">
            <button className="font-bold px-2 py-1 rounded-md w-full h-full">
              Adicionar paciente
            </button>
          </Link>
        </div>
      </div>
      <div className="z-10 w-full text-sm lg:flex bg-zinc-100 p-4 rounded-lg flex flex-col space-y-6">
        <div>
          <h2 className="text-3xl">Informações Gerais</h2>
          <span className="text-base">
            Data e Hora :
            {`${date.getHours()} Horas e ${date.getMinutes()} minutos`}
          </span>
        </div>
        <div className="flex flex-row space-x-4">
          <Card className="w-[250px] bg-emerald-100 flex flex-col justify-between">
            <CardHeader className="text-lg">
              Número de pacientes ativos
            </CardHeader>
            <CardContent>
              <span className="text-2xl font-bold">15</span>
            </CardContent>
          </Card>
          <Card className="w-[250px] bg-yellow-100 flex flex-col justify-between">
            <CardHeader className="text-lg">Em situação instável</CardHeader>
            <CardContent>
              <span className="text-2xl font-bold">15</span>
            </CardContent>
          </Card>
          <Card className="w-[250px] bg-red-100 flex flex-col justify-between">
            <CardHeader className="text-lg">
              Porcentagem de aderência de dieta
            </CardHeader>
            <CardContent>
              <span className="text-2xl font-bold">15%</span>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
