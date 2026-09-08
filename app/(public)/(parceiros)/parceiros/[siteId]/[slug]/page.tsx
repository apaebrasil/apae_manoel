import Image from "next/image"
import Link from "next/link"

import { SectionWrapper } from "@/components/section"
import { ArrowLeft, SquareArrowOutUpRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { fetch } from "@/services"

interface PageProps {
  params: Promise<{ siteId: string; slug: string }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  const responseSuponsor = await fetch.sponsorBySlug({ id: slug })

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
            {responseSuponsor.nome}
          </h1>
        </div>

        <Image
          src={responseSuponsor.logo_url}
          alt="nuvem"
          className="block aspect-video w-full rounded-md object-contain shadow-2xl"
          width={500}
          height={500}
          quality={100}
          title={responseSuponsor.nome}
        />
      </SectionWrapper>

      <SectionWrapper className="space-y-10 p-20 lg:grid-cols-2">
        <div>
          <span className="mb-6 block text-sm font-bold text-blue-400 uppercase">
            A história por trás
          </span>

          <h2 className="text-6xl font-normal text-blue-950">
            Feito <span className="text-blue-400">com</span> intenção.
          </h2>
        </div>

        <div className="flex flex-col space-y-10">
          <p className="text-justify text-base leading-relaxed font-normal text-zinc-700 lg:text-lg">
            {responseSuponsor.descricao}
          </p>

          <Separator className="bg-blue-200" />

          <Link
            href={responseSuponsor.link ? responseSuponsor.link : "#"}
            target="_blank"
            className="ml-auto inline-flex w-fit flex-col items-center gap-2.5 rounded-md px-6 py-3 text-center text-xs font-semibold"
          >
            <div className="flex items-center gap-2">
              <span>Conheça {responseSuponsor.nome}</span>
              <SquareArrowOutUpRight size={12} />
            </div>
            <Separator className="w-fit bg-black" />
          </Link>
        </div>
      </SectionWrapper>
    </main>
  )
}
