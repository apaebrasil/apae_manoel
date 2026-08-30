import { Eye, Target, Zap } from "lucide-react"
import { DynamicIcon } from "lucide-react/dynamic"
import { SectionWrapper } from "@/components/section"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { aboutInfo, aboutValues, historyMilestones } from "@/constants"

export default function Page() {
  return (
    <main className="min-h-dvh overflow-x-hidden bg-blue-50 px-5">
      <div className="container mx-auto">
        <SectionWrapper className="py-10 md:py-24">
          <header className="relative container mx-auto mb-10 overflow-hidden rounded-lg border-2 border-blue-200 bg-blue-100/20 p-6 sm:p-10">
            <div className="pointer-events-none absolute -top-10 -right-8 h-32 w-32 animate-[float_6s_ease-in-out_infinite] rounded-full border-4 border-blue-300 bg-blue-200/40 sm:-top-16 sm:-right-10 sm:h-56 sm:w-56" />

            <div className="relative z-10 flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase shadow-sm shadow-blue-600/30">
                <Zap className="h-3.5 w-3.5" />
                Quem somos
              </span>

              <h1 className="max-w-2xl text-3xl font-bold text-balance text-blue-950 sm:text-4xl md:text-5xl lg:text-6xl">
                A maior rede de atendimento à pessoa com deficiência da América
                Latina
              </h1>

              <p className="max-w-2xl text-base font-normal text-blue-900/80">
                Há mais de 70 anos transformando vidas e construindo uma
                sociedade mais inclusiva para pessoas com deficiência
                intelectual e múltipla.
              </p>
            </div>
          </header>
        </SectionWrapper>

        <SectionWrapper className="pb-16 md:pb-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase">
                Nossa história
              </span>

              <h2 className="mt-2 mb-6 text-2xl font-bold text-blue-950 sm:text-3xl">
                Uma trajetória de luta e conquistas
              </h2>

              <div className="space-y-4 text-justify text-base leading-relaxed text-blue-900/80">
                <p>
                  A APAE - Associação de Pais e Amigos dos Excepcionais é uma
                  organização social cujo objetivo principal é promover a
                  atenção integral à pessoa com deficiência intelectual e
                  múltipla.
                </p>

                <p>
                  Fundada em 1954 no Rio de Janeiro, a partir da iniciativa de
                  pais, técnicos e amigos que buscavam garantir os direitos e a
                  inclusão social de seus filhos, a Apae cresceu e se consolidou
                  como a maior rede de promoção e defesa dos direitos das
                  pessoas com deficiência do Brasil.
                </p>

                <p>
                  Hoje, com mais de 2.200 unidades espalhadas por todo o país,
                  atendemos milhares de pessoas diariamente, oferecendo serviços
                  nas áreas de educação, saúde, assistência social e defesa de
                  direitos.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {aboutInfo.map((item) => (
                <Card
                  key={item.description}
                  className="items-center gap-3 rounded-2xl border border-blue-200 bg-white p-6 text-center shadow-sm shadow-blue-950/5"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${item.bgColor}`}
                  >
                    <DynamicIcon
                      name={item.icon}
                      className={`h-6 w-6 ${item.color}`}
                    />
                  </div>

                  <p className={`text-2xl font-bold sm:text-3xl ${item.color}`}>
                    {item.titleCounter}
                  </p>

                  <p className="text-xs font-medium text-blue-900/60 sm:text-sm">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16 md:pb-24">
          <header className="mb-10 flex flex-col items-center gap-2 text-center">
            <span className="text-sm font-semibold text-blue-600 uppercase">
              Nossos pilares
            </span>
            <h2 className="text-2xl font-bold text-blue-950 sm:text-3xl md:text-4xl">
              Missão, Visão e Valores
            </h2>
          </header>

          <div className="mb-12 grid gap-5 md:grid-cols-2">
            <Card className="overflow-hidden rounded-2xl border border-l-4 border-blue-200 border-l-blue-600 bg-white shadow-sm shadow-blue-950/5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <Target className="h-5 w-5 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950">Missão</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-justify text-sm leading-relaxed text-blue-900/80">
                  Promover e articular ações de defesa de direitos e prevenção,
                  orientações, prestação de serviços e apoio à família,
                  direcionadas à melhoria da qualidade de vida da pessoa com
                  deficiência e à construção de uma sociedade justa e solidária.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-2xl border border-l-4 border-blue-200 border-l-blue-400 bg-white shadow-sm shadow-blue-950/5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <Eye className="h-5 w-5 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950">Visão</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-justify text-sm leading-relaxed text-blue-900/80">
                  Ser referência e liderança no Brasil na defesa de direitos e
                  prestação de serviços às pessoas com deficiência intelectual e
                  múltipla, primando pela excelência e inovação.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="mb-6 text-center text-xl font-bold text-blue-950">
              Nossos Valores
            </h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {aboutValues.map((value) => (
                <Card
                  key={value.title}
                  className="items-center gap-3 rounded-2xl border border-blue-200 bg-white p-6 text-center shadow-sm shadow-blue-950/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                    <DynamicIcon
                      name={value.icon}
                      className="h-6 w-6 text-blue-800"
                    />
                  </div>
                  <h4 className="text-base font-bold text-blue-950">
                    {value.title}
                  </h4>
                  <p className="text-sm text-blue-900/70">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="pb-16 md:pb-24">
          <header className="mb-12 text-center">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Nossa trajetória
            </span>
            <h2 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl md:text-4xl">
              Linha do Tempo
            </h2>
          </header>

          <ol className="relative mx-auto max-w-2xl border-l-2 border-blue-200 pl-6">
            {historyMilestones.map((milestone) => (
              <li key={milestone.year} className="mb-10 last:mb-0">
                <span className="absolute -left-2.25 mt-1.5 h-4 w-4 rounded-full border-2 border-blue-600 bg-white" />
                <span className="text-sm font-bold text-blue-600">
                  {milestone.year}
                </span>
                <h4 className="mt-1 text-base font-bold text-blue-950">
                  {milestone.title}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-blue-900/70">
                  {milestone.description}
                </p>
              </li>
            ))}
          </ol>
        </SectionWrapper>
      </div>
    </main>
  )
}
