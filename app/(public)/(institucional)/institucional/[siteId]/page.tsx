import Head from "next/head"

import { SectionHeader } from "@/components/common/section-header"
import { SectionWrapper } from "@/components/section"
import Image from "next/image"
import Teste from "@public/lideranca-apae.png"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Calendar, Users2 } from "lucide-react"
import Link from "next/link"

interface PageProps {
  params: Promise<{ siteId: string }>
}

export default async function Page({ params }: PageProps) {
  const { siteId } = await params
  return (
    <div>
      <Head>
        <title>Institucional - Apae Brasil</title>
      </Head>

      <main className="container mx-auto px-5 lg:px-0">
        <SectionWrapper className="py-10 md:py-24">
          <SectionHeader
            subtitle="Institucional"
            title="Cuidar, incluir e transformar realidades."
            description="Conheça as áreas que fortalecem a atuação da Apae Brasil e ampliam oportunidades para pessoas com deficiência em todo o país."
          />
        </SectionWrapper>

        <SectionWrapper className="py-10">
          <Card className="border border-blue-100 p-0 drop-shadow-2xl">
            <CardContent className="grid grid-cols-1 gap-6 p-0 md:grid-cols-[1fr_1.25fr] md:gap-10">
              <div
                role="banner"
                className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-t-xl md:h-auto md:min-h-140 md:rounded-none md:rounded-l-xl"
              >
                <Image
                  src={Teste}
                  alt="Mariana Alves"
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div role="contentinfo" className="p-6 md:p-12">
                <span className="mb-3 block text-xs font-semibold text-blue-300 uppercase">
                  Quem conduz esta frente
                </span>

                <h2 className="mb-5 text-2xl font-semibold md:text-3xl">
                  Mariana Alves
                </h2>

                <p className="text-base leading-relaxed font-normal text-zinc-800">
                  Nossa atuação nasce do compromisso com a defesa de direitos, a
                  autonomia e a participação social. Em diálogo com a Rede Apae,
                  conectamos conhecimento, políticas públicas e práticas que
                  fazem a diferença.
                </p>
              </div>
            </CardContent>
          </Card>
        </SectionWrapper>

        <SectionWrapper className="py-10">
          <header className="flex items-center">
            <h3 className="mb-8 text-2xl font-semibold text-blue-950 md:text-3xl">
              Como trabalhamos
            </h3>
          </header>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group border border-blue-100 shadow-2xl transition-transform duration-500 hover:-translate-y-3">
              <CardContent>
                <div className="w-fit rounded-full bg-blue-200 p-2.5">
                  <BookOpen size={20} className="font-bold text-blue-950" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-blue-950">
                  PDDE
                </h3>

                <p className="mt-2 text-base font-normal text-zinc-800">
                  Orientação e apoio para uma gestão transparente dos recursos
                  da educação.
                </p>

                <Link
                  href={`/institucional/${siteId}/pdde`}
                  className="group mt-6 flex items-center gap-1.5 text-sm font-medium group-hover:underline"
                >
                  <span>Conheço esta área</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </Link>
              </CardContent>
            </Card>

            <Card className="group border border-blue-100 shadow-2xl transition-transform duration-500 hover:-translate-y-3">
              <CardContent>
                <div className="w-fit rounded-full bg-blue-200 p-2.5">
                  <Users2 size={20} className="font-bold text-blue-950" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-blue-950">
                  Articulação
                </h3>

                <p className="mt-2 text-base font-normal text-zinc-800">
                  Conexões que fortalecem políticas públicas e a participação da
                  sociedade.
                </p>

                <Link
                  href="/"
                  className="group mt-6 flex items-center gap-1.5 text-sm font-medium group-hover:underline"
                >
                  <span>Conheço esta área</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </Link>
              </CardContent>
            </Card>

            <Card className="group border border-blue-100 shadow-2xl transition-transform duration-500 hover:-translate-y-3 md:col-span-2 lg:col-span-1">
              <CardContent>
                <div className="w-fit rounded-full bg-blue-200 p-2.5">
                  <Calendar size={20} className="font-bold text-blue-950" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-blue-950">
                  Coordenadorias técnicas
                </h3>

                <p className="mt-2 text-base font-normal text-zinc-800">
                  Conhecimento especializado para apoiar pessoas, famílias e
                  profissionais.
                </p>

                <Link
                  href="/"
                  className="group mt-6 flex items-center gap-1.5 text-sm font-medium group-hover:underline"
                >
                  <span>Conheço esta área</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </Link>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
