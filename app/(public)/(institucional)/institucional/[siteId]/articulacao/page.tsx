import { Handshake, Landmark, Megaphone, Users2 } from "lucide-react"
import { SectionHeader } from "@/components/common/section-header"
import { SectionWrapper } from "@/components/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const frentesDeAtuacao = [
  {
    icon: Landmark,
    titulo: "Políticas Públicas",
    descricao:
      "Participação em conselhos, comissões e espaços de construção de políticas voltadas às pessoas com deficiência.",
  },
  {
    icon: Users2,
    titulo: "Rede Apae",
    descricao:
      "Fortalecimento do diálogo entre as unidades da Rede Apae em todo o Brasil, ampliando a atuação conjunta.",
  },
  {
    icon: Handshake,
    titulo: "Parcerias Institucionais",
    descricao:
      "Construção de parcerias com órgãos públicos, empresas e organizações da sociedade civil.",
  },
  {
    icon: Megaphone,
    titulo: "Representação e Advocacy",
    descricao:
      "Defesa dos direitos das pessoas com deficiência junto a espaços de decisão e formulação de políticas.",
  },
]

export default function Page() {
  return (
    <div>
      <main className="container mx-auto px-5 lg:px-0">
        <SectionWrapper className="pt-10 md:pt-24">
          <SectionHeader
            subtitle="Articulação Institucional"
            title="Articulação"
            description="Conexões que fortalecem políticas públicas e ampliam a participação da sociedade na defesa dos direitos das pessoas com deficiência."
          />
        </SectionWrapper>

        <SectionWrapper className="pt-10 md:pt-24">
          <Card className="p-6">
            <CardHeader className="mb-3">
              <CardTitle className="text-lg font-semibold text-blue-950">
                O que é a Articulação?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify text-base font-normal text-zinc-800">
                É a frente que conecta a Apae Brasil a órgãos públicos,
                conselhos, parceiros e à própria Rede Apae, promovendo
                diálogo, participação social e o fortalecimento de políticas
                voltadas à inclusão das pessoas com deficiência.
              </p>
            </CardContent>
          </Card>
        </SectionWrapper>

        <SectionWrapper className="py-10">
          <header className="mb-8 pt-16">
            <span className="mb-2 block text-xs font-semibold text-blue-400">
              Como atuamos
            </span>
            <h2 className="mb-5 text-2xl font-semibold text-blue-950">
              Frentes de atuação
            </h2>

            <Separator orientation="horizontal" />
          </header>

          <div className="grid grid-cols-1 gap-4 pb-24 md:grid-cols-2">
            {frentesDeAtuacao.map((frente) => (
              <Card
                key={frente.titulo}
                className="group border border-blue-100 shadow-2xl transition-transform duration-500 hover:-translate-y-3"
              >
                <CardContent>
                  <div className="w-fit rounded-full bg-blue-200 p-2.5">
                    <frente.icon
                      size={20}
                      className="font-bold text-blue-950"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-blue-950">
                    {frente.titulo}
                  </h3>

                  <p className="mt-2 text-base font-normal text-zinc-800">
                    {frente.descricao}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
