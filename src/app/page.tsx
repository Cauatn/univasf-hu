import PacientsTable from "@/components/PacientsTable";
import { Plus } from "lucide-react";

export default function Home() {
  const date = new Date();

  return (
    <main className="flex min-h-screen flex-col px-24 py-8 space-y-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-4xl ">Bem Vindo(a) Cauã</h1>
      </div>
      <section className="flex flex-col space-y-6 max-w-screen-2xl w-full">
        <div className="flex flex-row space-x-8">
          <div className="shadow-lg rounded-lg p-4 max-w-[800px]">
            <PacientsTable />
          </div>
          <div className="shadow-lg rounded-lg p-4 space-y-2 h-full w-full max-w-[480px]">
            <h3 className="text-black font-semibold">Estatisticas</h3>
            <div className="flex flex-row space-x-4">
              <div>
                <div className="flex flex-col text-gray-500 items-center justify-center bg-zinc-100 w-fit p-4 rounded-md">
                  <span>Você possui</span>
                  <span className="text-black font-bold uppercase text-xl">
                    12
                  </span>
                  <span>paciente Ativos.</span>
                </div>
              </div>
              <div>
                <div className="flex flex-col text-gray-500 items-center justify-center bg-zinc-100 w-fit p-4 rounded-md">
                  <span>Você possui</span>
                  <span className="text-black font-bold uppercase text-xl">
                    12
                  </span>
                  <span>paciente Ativos.</span>
                </div>
              </div>
              <div>
                <div className="flex flex-col text-gray-500 items-center justify-center bg-zinc-100 w-fit p-4 rounded-md">
                  <span>Você possui</span>
                  <span className="text-black font-bold uppercase text-xl">
                    12
                  </span>
                  <span>paciente Ativos.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-8">
          <div className="shadow-lg rounded-lg p-4 space-y-2 max-w-[800px] w-full">
            <button className="space-x-2 bg-blue-100 [&>*]:text-blue-600 [&>*]:font-bold flex-row p-2 rounded-lg w-full items-center justify-center flex">
              <Plus />
              <span>LEMBRETE</span>
            </button>
          </div>
          <div className="shadow-lg rounded-lg p-4 space-y-2 h-fit w-full max-w-[480px]">
            <h3 className="text-black font-semibold">Estatisticas</h3>
            <div className="flex flex-row space-x-4">
              <div>
                <div className="flex flex-col text-gray-500 items-center justify-center bg-zinc-100 w-fit p-4 rounded-md">
                  <span>Você possui</span>
                  <span className="text-black font-bold uppercase text-xl">
                    12
                  </span>
                  <span>paciente Ativos.</span>
                </div>
              </div>
              <div>
                <div className="flex flex-col text-gray-500 items-center justify-center bg-zinc-100 w-fit p-4 rounded-md">
                  <span>Você possui</span>
                  <span className="text-black font-bold uppercase text-xl">
                    12
                  </span>
                  <span>paciente Ativos.</span>
                </div>
              </div>
              <div>
                <div className="flex flex-col text-gray-500 items-center justify-center bg-zinc-100 w-fit p-4 rounded-md">
                  <span>Você possui</span>
                  <span className="text-black font-bold uppercase text-xl">
                    12
                  </span>
                  <span>paciente Ativos.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
