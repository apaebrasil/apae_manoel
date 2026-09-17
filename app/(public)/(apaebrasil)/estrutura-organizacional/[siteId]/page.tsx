import { SectionWrapper } from "@/components/section"
import { SectionHeader } from "@/components/common/section-header"
import { OrganizationalStructure } from "@/components/organizational-structure/organizational-structure"
import { fetch } from "@/services"

interface PageProps {
  params: Promise<{ siteId: string }>
}

export default async function Page({ params }: PageProps) {
  const { siteId } = await params
  const setores = await fetch.getSetores({ idSite: Number(siteId) })

  return (
    <main className="min-h-dvh overflow-x-hidden bg-blue-50 px-5">
      <div className="container mx-auto">
        <SectionWrapper className="py-10 md:py-24">
          <SectionHeader
            subtitle="Estrutura organizacional"
            title="A inteligência por trás de cada avanço"
            description="Não é apenas quem está no time. É o que acontece quando especialidades diferentes se conectam para tornar o impossível executável."
          />
        </SectionWrapper>

        <SectionWrapper>
          <OrganizationalStructure setores={setores} />
        </SectionWrapper>
      </div>
    </main>
  )
}
