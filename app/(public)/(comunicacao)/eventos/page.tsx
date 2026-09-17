import { SectionHeader } from "@/components/common/section-header"
import { SectionWrapper } from "@/components/section"
import { CategoryCard } from "@/components/transparency/category-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { IconName } from "lucide-react/dynamic"
import Congresso from "@/public/congresso nacinal.png"
import Image from "next/image"

export const eventosCategoria = [
  {
    id: 1,
    uuid: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    titulo: "Olimpíadas",
    tipo: "evento",
    descricao:
      "Jogos e competições esportivas para promover a integração e o espírito de equipe.",
    ordem: 1,
    idSite: 1,
  },
  {
    id: 2,
    uuid: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    titulo: "Festival Nossa Arte",
    tipo: "evento",
    descricao:
      "Mostra cultural voltada à valorização da arte, música, dança e expressão criativa.",
    ordem: 2,
    idSite: 1,
  },
  {
    id: 3,
    uuid: "c3d4e5f6-a7b8-9012-cdef-123456789012",
    titulo: "Congresso Nacional",
    tipo: "evento",
    descricao:
      "Encontro focado em debates, palestras, aprendizado e inovação para o futuro.",
    ordem: 3,
    idSite: 1,
  },
]

export default async function Page() {
  return (
    <main className="min-h-dvh overflow-x-hidden bg-blue-50 px-5">
      <div className="container mx-auto">
        <SectionWrapper className="py-10 md:py-24">
          <SectionHeader
            title="Eventos APAE Brasil, Onde o amor e a inclusão se encontram"
            subtitle="Agenda de Eventos"
            description="Participe de capacitações, fóruns e grandes eventos focados na inclusão da pessoa com deficiência"
          />
        </SectionWrapper>

        <SectionWrapper className="py-10">
          <Card className="grid grid-cols-1 gap-0 py-0 lg:grid-cols-2">
            <CardContent className="bg-blue-950">
              <div className="bg-blue-950">
                <header className="px-5 py-10 lg:p-16">
                  <div>
                    <span className="mb-7 flex w-fit items-center gap-2 overflow-hidden rounded-lg bg-blue-800 px-3 py-1.5 text-xs font-medium text-white">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                      Acontecendo Agora
                    </span>
                    <h2 className="mb-5 text-3xl font-medium text-white lg:text-5xl">
                      Congresso Nacional
                    </h2>

                    <p className="mb-8 text-sm font-normal text-zinc-200 lg:text-base">
                      Reunindo a rede APAEana para debater políticas públicas,
                      inovação, práticas de inclusão e a defesa de direitos da
                      pessoa com deficiência.
                    </p>

                    <div className="mb-10 flex flex-col justify-between gap-7 lg:flex-row">
                      <p className="flex items-center gap-1.5">
                        <Calendar size={16} className="text-blue-200" />
                        <span className="block text-zinc-100">
                          12 a 16 de novembro de 2026
                        </span>
                      </p>

                      <p className="flex items-center gap-1.5">
                        <MapPin size={16} className="text-blue-200" />
                        <span className="block text-zinc-100">
                          Centro Esportivo Nacional · Brasília, DF
                        </span>
                      </p>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      className="cursor-pointer rounded-2xl px-5 py-3 text-sm font-bold"
                    >
                      Ver programação
                      <ArrowRight />
                    </Button>
                  </div>
                </header>
              </div>
            </CardContent>

            <CardContent className="bg-blue-900 p-12">
              <div className="relative flex h-full flex-col gap-10">
                <div className="flex flex-col items-end">
                  <p className="font-serif text-3xl font-medium text-blue-100 lg:text-6xl">
                    2026
                  </p>
                  <span className="block text-end text-xs font-bold text-zinc-100 uppercase">
                    Edição especial
                  </span>
                </div>

                <div className="mt-auto flex flex-col justify-end">
                  <span className="text-xs font-bold text-zinc-100">
                    A memória continua
                  </span>
                  <h3 className="w-fit max-w-xl text-lg font-medium text-white lg:text-2xl">
                    Reviva cada encontro, cada conquista e cada história.
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </SectionWrapper>

        <SectionWrapper className="py-10">
          <header className="mb-7 space-y-2">
            <span className="block text-base font-bold text-zinc-800">
              Acompanhe de perto
            </span>
            <h2 className="text-2xl font-medium text-blue-950">
              Nosssos Eventos
            </h2>
          </header>

          <div
            role="list"
            aria-label="Eventos da APAE Brasil"
            className="grid grid-cols-1 gap-4 lg:grid-cols-3"
          >
            {eventosCategoria.map((category, index) => {
              const iconName: IconName =
                category.tipo !== "evento" ? "folder-open" : "tickets"

              return (
                <CategoryCard
                  key={category.uuid}
                  categoria={category}
                  siteId={"1"}
                  documentCount={1}
                  index={index}
                  icon={iconName}
                />
              )
            })}
          </div>
        </SectionWrapper>
      </div>
    </main>
  )
}
