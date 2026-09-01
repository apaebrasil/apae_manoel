import Image from "next/image"
import Link from "next/link"

import Nuvem from "@/public/nuvem.png"
import { SectionWrapper } from "@/components/section"
import { ArrowLeft, SquareArrowOutUpRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <main className="container mx-auto max-w-7xl">
      <SectionWrapper className="w-full px-8 py-14">
        <Link
          href="/"
          className="group flex items-center gap-2 text-xs font-normal hover:underline"
        >
          <ArrowLeft size={12} />
          <span> Voltar para a home</span>
        </Link>

        <div className="pt-16 pb-11">
          <h1 className="mt-4 mb-5 text-6xl font-normal text-blue-950 lg:text-9xl">
            Nuvem
          </h1>
          <p className="max-w-lg text-justify text-base font-normal text-black lg:text-3xl">
            Infraestrutura que transforma boas ideias em experiências
            confiáveis.
          </p>
        </div>

        <Image
          src={Nuvem}
          alt="nuvem"
          className="block aspect-video w-full rounded-md object-cover shadow-2xl"

          quality={100}
        />
      </SectionWrapper>

      <SectionWrapper className="grid grid-cols-1 gap-24 p-20 lg:grid-cols-2">
        <div>
          <span className="mb-6 block text-xs font-bold text-blue-300">
            A história por trás
          </span>

          <h2 className="text-6xl font-normal text-blue-950">
            Feito <span className="text-blue-400">com</span> intenção.
          </h2>
        </div>

        <div className="flex flex-col space-y-10">
          <p className="text-justify text-base font-normal text-zinc-700 lg:text-lg">
            A Nuvem chegou até nós com uma missão clara: traduzir sua expertise
            técnica em uma marca mais humana. Juntos, criamos uma plataforma
            editorial que aproxima times de produto e pessoas.
          </p>

          <Separator className="bg-blue-200" />

          <Link
            href="/"
            className="ml-auto inline-flex w-fit flex-col items-center gap-2.5 rounded-md px-6 py-3 text-center text-xs font-normal"
          >
            <div className="flex items-center gap-2">
              <span>Conheça a Nuvem</span>
              <SquareArrowOutUpRight size={12} />
            </div>
            <Separator className="w-fit bg-black" />
          </Link>
        </div>
      </SectionWrapper>
    </main>
  )
}
