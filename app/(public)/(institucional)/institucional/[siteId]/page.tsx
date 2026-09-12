import Head from "next/head"

import { SectionHeader } from "@/components/common/section-header"
import { SectionEyebrow } from "@/components/common/section-eyebrow"
import { IconFeatureCard } from "@/components/common/icon-feature-card"
import { ProfileCard } from "@/components/common/profile-card"
import { SectionWrapper } from "@/components/section"
import { Separator } from "@/components/ui/separator"
import Teste from "@public/36626dfb-c82e-4f8e-896e-62c6b10ea425.png"
import { BookOpen, Calendar, Users2 } from "lucide-react"

interface PageProps {
  params: Promise<{ siteId: string }>
}

export default async function Page({ params }: PageProps) {
  const { siteId } = await params

  const areasDeAtuacao = [
    {
      icon: BookOpen,
      title: "PDDE",
      description:
        "Orientação e apoio para uma gestão transparente dos recursos da educação.",
      href: `/institucional/${siteId}/pdde`,
    },
    {
      icon: Users2,
      title: "Articulação",
      description:
        "Conexões que fortalecem políticas públicas e a participação da sociedade.",
      href: `/institucional/${siteId}/articulacao`,
    },
    {
      icon: Calendar,
      title: "Coordenadorias técnicas",
      description:
        "Conhecimento especializado para apoiar pessoas, famílias e profissionais.",
      href: `/institucional/${siteId}/coordenadorias-tecnicas`,
      className: "md:col-span-2 lg:col-span-1",
    },
  ]

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
          <header className="mb-8">
            <SectionEyebrow>Liderança</SectionEyebrow>
            <h2 className="text-2xl font-semibold text-brand-strong md:text-3xl">
              Quem conduz esta frente
            </h2>
          </header>

          <Separator orientation="horizontal" className="mb-8" />

          <ProfileCard
            photo={Teste}
            name="José Marcos Cardoso do Carmo"
            bio="Nossa atuação nasce do compromisso com a defesa de direitos, a autonomia e a participação social. Em diálogo com a Rede Apae, conectamos conhecimento, políticas públicas e práticas que fazem a diferença."
          />
        </SectionWrapper>

        <SectionWrapper className="py-10">
          <header className="mb-8">
            <SectionEyebrow>Nossa atuação</SectionEyebrow>
            <h2 className="text-2xl font-semibold text-brand-strong md:text-3xl">
              Como trabalhamos
            </h2>
          </header>

          <Separator orientation="horizontal" className="mb-8" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {areasDeAtuacao.map((area) => (
              <IconFeatureCard
                key={area.title}
                icon={area.icon}
                title={area.title}
                description={area.description}
                href={area.href}
                className={area.className}
              />
            ))}
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
