import { SectionHeader } from "@/components/common/section-header"
import { SectionWrapper } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FolderClosed, FolderOpen, MoveRight } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <div>
      <main className="container mx-auto px-5 lg:px-0">
        <SectionWrapper className="pt-10 md:pt-24">
          <SectionHeader
            subtitle="Programa Dinheiro Direto na Escola"
            title="PDDE"
            description="O PDDE aproxima recursos da escola, fortalecendo a autonomia da comunidade escolar e apoiando melhorias no cotidiano da educação."
          />
        </SectionWrapper>

        <SectionWrapper className="pt-10 md:pt-24">
          <Card className="p-6">
            <CardHeader className="mb-3">
              <CardTitle className="text-lg font-semibold text-blue-950">
                O que é o PDDE?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify text-base font-normal text-zinc-800">
                É uma política pública que oferece assistência financeira
                suplementar às escolas públicas e instituições privadas de
                educação especial. Na Rede Apae, os recursos apoiam ações
                planejadas coletivamente para garantir melhores condições de
                atendimento.
              </p>
            </CardContent>
          </Card>
        </SectionWrapper>

        <SectionWrapper className="py-10">
          <header className="mb-8 pt-16">
            <span className="mb-2 block text-xs font-semibold text-blue-400">
              Materiais de apoio
            </span>
            <h2 className="mb-5 text-2xl font-semibold text-blue-950">
              Documentos do PDDE
            </h2>

            <Separator orientation="horizontal" />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/" className="group">
              <Card className="shadow-2xl transition-transform duration-300 group-hover:-translate-y-3">
                <CardContent>
                  <div className="mb-6 flex items-center">
                    <FolderClosed
                      size={36}
                      className="blcok text-amber-400 transition-all duration-500 group-hover:hidden"
                    />

                    <FolderOpen
                      size={36}
                      className="hidden text-amber-400 transition-all duration-500 group-hover:block"
                    />
                  </div>

                  <span className="mb-2 block text-xs font-medium text-blue-400">
                    Guia · 2024
                  </span>

                  <h3 className="mb-3 text-base font-semibold text-blue-950">
                    Guia de execução do PDDE
                  </h3>

                  <span className="mb-5 block text-sm font-normal text-zinc-700">
                    2,4 MB
                  </span>

                  <Button
                    type="button"
                    variant="link"
                    className="cursor-pointer px-0 group-hover:underline"
                  >
                    <span>Abrir arquivo</span>
                    <MoveRight className="transition-transform duration-500 group-hover:translate-x-2" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
