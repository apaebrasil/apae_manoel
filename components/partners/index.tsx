import { Handshake } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { PartnerCard } from "./partner-card"
import { Sponsor } from "@/types/sponsor-type"

interface PartnersProps {
  siteId: number
  sponsor: Sponsor[]
}

export function Partners({ siteId, sponsor }: PartnersProps) {
  return (
    <div className="container mx-auto space-y-12 px-4">
      <header className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <Badge className="mb-2 inline-block h-auto rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-950">
          Nossos Parceiros
        </Badge>
        <h2 className="text-3xl font-bold text-zinc-950 md:text-4xl">
          Parcerias que Fortalecem a Inclusão
        </h2>
        <p className="font-medium text-pretty text-zinc-700">
          Juntos transformamos vidas. A APAE Brasil se une a empresas e pessoas
          comprometidas com a autonomia, a defesa de direitos e o
          desenvolvimento de pessoas com deficiência intelectual e múltipla.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-stretch">
        <div className="relative isolate flex flex-col justify-between overflow-hidden rounded-3xl bg-blue-950 p-8 text-white md:p-10">
          <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-950 via-blue-950/95 to-blue-900/90" />

          <div className="space-y-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Handshake className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-balance md:text-3xl">
              Sua empresa pode fazer parte dessa rede
            </h3>
            <p className="text-pretty text-blue-100/80">
              Torne-se um parceiro da APAE Brasil e ajude a levar autonomia,
              educação e cidadania a milhares de pessoas com deficiência
              intelectual e múltipla em todo o país.
            </p>
          </div>

          <Button className="mt-8 w-fit bg-white text-blue-950 hover:bg-blue-50">
            <a href="mailto:contato@fenapaes.org.br?subject=Quero%20ser%20parceiro%20da%20Apae%20Brasil">
              Quero ser parceiro
            </a>
          </Button>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl bg-blue-50 p-6 md:p-8">
          <p className="text-sm font-semibold tracking-wide text-blue-950 uppercase">
            Empresas que já apoiam a causa
          </p>

          <div
            role="list"
            aria-label="Empresas parceiras"
            className="flex flex-wrap content-start gap-5"
          >
            {sponsor.map((partner) => (
              <PartnerCard
                key={partner.uuid}
                partner={partner}
                siteId={siteId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
