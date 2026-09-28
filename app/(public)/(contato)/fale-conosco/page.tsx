import { SectionHeader } from "@/components/common"
import { ContactMe } from "@/components/contact-me"
import { SectionWrapper } from "@/components/section"
import { Card } from "@/components/ui/card"
import { fetch } from "@/services"
import { headers } from "next/headers"
import { notFound } from "next/navigation"

export default async function Page() {
  const headerList = await headers()
  const domain = headerList.get("host")

  if (!domain) {
    notFound()
  }
  const response = await fetch.getInfoWebSite({
    domain,
  })
  return (
    <main className="min-h-dvh overflow-x-hidden bg-blue-50 px-5">
      <div className="container mx-auto">
        <SectionWrapper className="py-10 md:py-24">
          <SectionHeader
            variant="badge"
            as="h1"
            subtitle="Central de Ajuda e Suporte"
            title="Estamos aqui para ouvir você e fortalecer nossa rede"
            description="Precisa de orientações, suporte técnico ou quer tirar dúvidas sobre a APAE Brasil? Entre em contato conosco ou consulte nossos canais de atendimento."
          />
        </SectionWrapper>

        <SectionWrapper className="py-10 md:py-24">
          <Card className="bg-blue-950">
            <ContactMe
              email={response.email}
              endereco={response.endereco}
              telefone={response.telefone}
            />
          </Card>
        </SectionWrapper>
      </div>
    </main>
  )
}
