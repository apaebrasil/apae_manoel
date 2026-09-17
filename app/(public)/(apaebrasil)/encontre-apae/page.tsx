"use client"

import Link from "next/link"
import { ArrowUpRight, Clock3, Mail, MapPin, Phone, Search } from "lucide-react"
import { useMemo, useState } from "react"

import { apaeLocations } from "@/constants/apae-locations"
import { SectionWrapper } from "@/components/section"
import { SectionHeader } from "@/components/common/section-header"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  const [query, setQuery] = useState("")
  const filteredLocations = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) return apaeLocations

    return apaeLocations.filter((location) =>
      [location.name, location.city, location.address, ...location.services]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    )
  }, [query])

  return (
    <main className="container mx-auto">
      <SectionWrapper className="px-5 py-10 md:py-24">
        <SectionHeader
          as="h1"
          subtitle="Encontre uma unidade"
          title="Cuidado perto de você."
          description="Encontre uma APAE, conheça os serviços disponíveis e fale com a equipe da sua região."
        />

        <div className="mb-8 max-w-xl">
          <div className="relative">
            <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque por cidade, unidade ou serviço" aria-label="Buscar uma APAE" className="border-none pl-10 text-base outline-none focus-visible:ring-0" />
            <Search size={16} className="absolute top-1/2 left-2 -translate-y-1/2 text-blue-600" />
          </div>
          <Separator className="bg-blue-400" />
        </div>

        <div className="mb-6 flex items-center gap-3.5">
          <span className="block shrink-0 text-sm font-medium text-zinc-800">{filteredLocations.length} {filteredLocations.length === 1 ? "unidade encontrada" : "unidades encontradas"}</span>
          <Separator className="bg-blue-400" />
        </div>

        {filteredLocations.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {filteredLocations.map((location) => (
              <Link key={location.id} href={`/encontre-apae/${location.id}`} className="group flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-800"><MapPin size={19} /></div>
                  <ArrowUpRight className="text-blue-700 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={19} />
                </div>
                <h2 className="mt-5 text-xl font-bold text-blue-950">{location.name}</h2>
                <p className="mt-1 text-sm font-medium text-blue-700">{location.city}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-700">{location.description}</p>
                <div className="mt-5 grid gap-2 border-t border-blue-100 pt-4 text-xs text-zinc-600">
                  <span className="flex items-center gap-2"><MapPin size={14} />{location.address}</span>
                  <span className="flex items-center gap-2"><Phone size={14} />{location.phone}</span>
                  <span className="flex items-center gap-2"><Clock3 size={14} />{location.hours}</span>
                  <span className="flex items-center gap-2"><Mail size={14} />{location.email}</span>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {location.services.map((service) => <span key={service} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-900">{service}</span>)}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-blue-300 p-8 text-center text-sm text-zinc-700">Nenhuma unidade encontrada para essa busca.</p>
        )}
      </SectionWrapper>
    </main>
  )
}
