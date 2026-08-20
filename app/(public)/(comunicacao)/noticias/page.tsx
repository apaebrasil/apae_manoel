import Image from "next/image"
import { SectionWrapper } from "@/components/section"
import { Separator } from "@/components/ui/separator"

import Image1 from "@/public/congresso.jpg"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Page() {
  return (
    <main>
      <SectionWrapper className="bg-blue-50">
        <header className="container mx-auto block max-w-7xl px-4 py-10">
          <h3 className="text-xs leading-5 font-semibold text-blue-800 uppercase lg:text-sm">
            Portal de notícias
          </h3>
          <h1 className="text-3xl leading-relaxed font-bold text-zinc-900 lg:text-5xl">
            Notícias da Federação Nacional das APAEs
          </h1>
          <p className="max-w-2xl text-sm font-medium text-zinc-700 lg:text-[18px]">
            Informação, inclusão e defesa de direitos. Acompanhe as ações e
            conquistas do movimento apaeano em todo o Brasil.
          </p>
        </header>
      </SectionWrapper>

      <Separator />

      <SectionWrapper className="container mx-auto max-w-7xl px-5 py-10">
        <div className="mb-5">
          <h3 className="flex w-full items-center gap-2 text-sm font-semibold text-zinc-700 uppercase">
            <div className="h-px w-7 bg-orange-300" />
            Notícia em destaque
          </h3>
        </div>

        <div
          role="contentinfo"
          className="grid grid-cols-1 overflow-hidden rounded-2xl ring-2 ring-blue-900 lg:grid-cols-2 shadow-2xs"
        >
          <div>
            <Image
              src={Image1}
              alt="Noticie"
              width={2500}
              height={2500}
              className="h-full w-full"
            />
          </div>

          <div className="flex flex-col justify-between p-10">
            <span className="mb-5 block rounded-2xl bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-950">
              Educação
            </span>

            <h2 className="mb-5 text-justify text-xl font-bold text-zinc-950 lg:text-3xl">
              Inclusão escolar avança e alcança mais de 200 mil estudantes
              atendidos pelas APAEs
            </h2>

            <p className="mb-5 text-justify text-sm font-medium text-zinc-800 lg:text-base">
              Novo levantamento mostra crescimento no número de matrículas em
              escolas regulares com apoio especializado das APAEs em todo o
              Brasil.
            </p>

            <span className="mb-5 inline-flex items-center gap-1.5 text-sm text-zinc-800 lg:text-base">
              <Calendar size={16} />
              04 de agosto de 2026
            </span>

            <div>
              <Button
                variant="default"
                type="button"
                className="flex h-10 cursor-pointer items-center bg-blue-900 px-5 py-2.5 transition-colors hover:bg-blue-950"
              >
                <span className="text-whtie text-base font-semibold">
                  Ler notícia completa
                </span>
                <ArrowRight size={16} className="text-white" />
              </Button>
            </div>
          </div>
        </div>

        <div
          role="searchbox"
          className="mt-10 rounded-md p-5 ring-2 ring-blue-300"
        >
          <div className="flex gap-5">
            <div className="flex-1 space-y-2">
              <label
                htmlFor=""
                className="block text-sm font-medium text-zinc-900"
              >
                Buscar notícia
              </label>
              <Input
                placeholder="Digite palavras-chaves...."
                className="focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor=""
                className="block text-sm font-medium text-zinc-900"
              >
                Ordenar por
              </label>
              <Select>
                <SelectTrigger className="w-fulL focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-0">
                  <SelectValue placeholder="Selecione o filtro" />
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false}>
                  <SelectGroup>
                    <SelectItem
                      value="Mais recentes"
                      className="focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-0"
                    >
                      Mais recentes
                    </SelectItem>
                    <SelectItem
                      value="Mais antigas"
                      className="focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-0"
                    >
                      Mais antigas
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
