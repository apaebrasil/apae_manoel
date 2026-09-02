"use client"
import dynamic from "next/dynamic"
import { ApaeLocation, ApaeMap } from "@/components/map"
import { SectionWrapper } from "@/components/section"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  ArrowUpRight,
  ExternalLink,
  MapPin,
  Phone,
  Search,
  Zap,
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const MapaUnidades = dynamic(
  () => import("@/components/map").then((mod) => mod.ApaeMap), // troca "Map" pelo nome real do seu export
  {
    ssr: false,
    loading: () => <div className="h-96 w-full animate-pulse bg-blue-50" />,
  }
)

const locations: ApaeLocation[] = [
  {
    id: "sp",
    name: "APAE São Paulo",
    city: "São Paulo, SP",
    address: "Rua Dr. Diogo de Faria, 558 — Vila Clementino",
    phone: "(11) 5080-7000",
    lat: -23.5963,
    lng: -46.6446,
  },
  {
    id: "campinas",
    name: "APAE Campinas",
    city: "Campinas, SP",
    address: "Rua Francisco Bueno Lacerda, 120 — Jardim das Paineiras",
    phone: "(19) 3772-2800",
    lat: -22.8947,
    lng: -47.0378,
  },
  {
    id: "rio",
    name: "APAE Rio de Janeiro",
    city: "Rio de Janeiro, RJ",
    address: "Rua Bom Pastor, 41 — Tijuca",
    phone: "(21) 2570-2494",
    lat: -22.9249,
    lng: -43.2321,
  },
  {
    id: "bh",
    name: "APAE Belo Horizonte",
    city: "Belo Horizonte, MG",
    address: "Rua da Bahia, 570 — Centro",
    phone: "(31) 3115-7600",
    lat: -19.9227,
    lng: -43.9402,
  },
]

export default function Page() {
  const [selected, setSelected] = useState<ApaeLocation>(locations[0])

  const selectLocation = (location: ApaeLocation) => setSelected(location)
  return (
    <main className="container mx-auto">
      <SectionWrapper className="px-5 py-10 md:py-24">
        <header className="relative mb-10 overflow-hidden rounded-lg border-2 border-blue-200 bg-blue-100/20 p-6 sm:p-10">
          <div className="pointer-events-none absolute -top-10 -right-8 h-32 w-32 animate-[float_6s_ease-in-out_infinite] rounded-full border-4 border-blue-300 bg-blue-200/40 sm:-top-16 sm:-right-10 sm:h-56 sm:w-56" />

          <div className="relative z-10 flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-zinc-800 uppercase">
              <Zap size={16} /> Encontre uma unidade
            </span>

            <h2 className="max-w-2xl text-3xl font-bold text-balance text-black sm:text-4xl md:text-5xl lg:text-6xl">
              Localize a APAE mais perto.
            </h2>

            <p className="max-w-2xl text-sm font-normal text-zinc-800">
              Encontre atendimento, apoio e informação onde você estiver.
            </p>
          </div>
        </header>
      </SectionWrapper>

      <SectionWrapper className="px-5 py-10 md:py-24">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
          <div className="col-span-1">
            <form action="GET">
              <div className="relative">
                <Input
                  placeholder="Digite o CEP da Apae ou nome da unidade"
                  className="border-none pl-10 text-base font-normal outline-none focus-visible:border-none focus-visible:ring-0 focus-visible:outline-none"
                />
                <Search
                  size={16}
                  className="absolute inset-0 top-1/2 left-2 -translate-y-1/2 text-blue-600"
                />
              </div>
              <Separator className="bg-blue-400" />
            </form>

            <div className="flex w-full items-center gap-3.5 pt-7 pb-4">
              <span className="block shrink-0 text-sm font-medium whitespace-nowrap text-zinc-800">
                4 unidades encontradas
              </span>

              <Separator
                orientation="horizontal"
                className="flex-1 bg-blue-400"
              />
            </div>

            <ul className="px-2.5 py-5">
              <li className="group box-border flex cursor-pointer items-center gap-5 border border-transparent border-b-blue-200 p-3 transition-colors duration-300 hover:border-blue-200 hover:bg-blue-200/30">
                <div className="flex size-10 items-center justify-center rounded-full bg-blue-200">
                  <MapPin size={16} className="text-blue-900" />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-black">
                    Apae São Paulo
                  </h3>

                  <p className="text-xs font-normal text-zinc-700">
                    São Paulo, SP
                  </p>
                  <p className="text-xs font-normal text-zinc-700">
                    Rua Dr. Diogo de Faria, 558 — Vila Clementino
                  </p>
                </div>

                <div className="ml-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ExternalLink size={16} className="text-zinc-700" />
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <div className="locator-map-column">
              <MapaUnidades
                locations={locations}
                selected={selected}
                onSelect={selectLocation}
              />

              <article className="pt-6">
                <div className="space-y-2.5">
                  <span className="text-xs font-bold text-zinc-700">
                    unidade selecionada
                  </span>
                  <h2 className="text-4xl font-normal text-black">
                    {selected.name}
                  </h2>
                  <p className="flex items-center gap-2.5 text-xs font-normal text-zinc-700">
                    <MapPin size={15} /> <span>{selected.address}</span>
                  </p>
                  <p className="flex items-center gap-2.5 text-xs font-normal text-zinc-700">
                    <Phone size={15} /> {selected.phone}
                  </p>
                </div>

                <Button
                  type="button"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selected.address)}`,
                      "_blank"
                    )
                  }
                  aria-label={`Ver rota para ${selected.name}`}
                  className="mt-6 ml-auto flex cursor-pointer items-center gap-2 rounded-lg bg-blue-950 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                >
                  Ver rota <ArrowUpRight size={17} />
                </Button>
              </article>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
