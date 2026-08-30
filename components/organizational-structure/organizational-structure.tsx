"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { ArrowRight, Building2, Search, Users2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { PersonCard } from "@/components/organizational-structure/person-card"
import { Setor } from "./type"

interface OrganizationalStructureProps {
  setores: Setor[]
}

function SetorIcon({ icon, nome }: { icon: string; nome: string }) {
  if (icon?.startsWith("http")) {
    return (
      <span className="relative h-3.5 w-3.5 shrink-0 overflow-hidden rounded-sm">
        <Image
          src={icon}
          alt={nome}
          fill
          sizes="14px"
          className="object-cover"
        />
      </span>
    )
  }

  return <Building2 size={14} className="shrink-0" />
}

export function OrganizationalStructure({
  setores,
}: OrganizationalStructureProps) {
  const [selectedSetorId, setSelectedSetorId] = useState<number | null>(null)
  const [search, setSearch] = useState("")

  const setoresOrdenados = useMemo(
    () => [...setores].sort((a, b) => a.ordem - b.ordem),
    [setores]
  )

  const colaboradoresDoSite = useMemo(
    () => setoresOrdenados.flatMap((setor) => setor.colaboradores),
    [setoresOrdenados]
  )

  const setorNomePorId = useMemo(
    () => new Map(setoresOrdenados.map((setor) => [setor.id, setor.nome])),
    [setoresOrdenados]
  )

  const colaboradores = useMemo(() => {
    const base = selectedSetorId
      ? colaboradoresDoSite.filter(
          (colaborador) => colaborador.idSetor === selectedSetorId
        )
      : colaboradoresDoSite

    const termo = search.trim().toLowerCase()
    if (!termo) return base

    return base.filter(
      (colaborador) =>
        colaborador.nome.toLowerCase().includes(termo) ||
        colaborador.cargo.toLowerCase().includes(termo)
    )
  }, [colaboradoresDoSite, selectedSetorId, search])

  return (
    <div className="flex flex-col gap-8 pb-16 md:flex-row md:pb-24">
      <div className="md:shrink-0">
        <div className="w-full rounded-md border-2 border-blue-200 bg-blue-100 p-3 md:w-72">
          <h3 className="mb-3.5 text-xs font-bold text-zinc-800">
            Navegar por departamento
          </h3>

          <ul className="space-y-1 pt-3">
            <li
              onClick={() => setSelectedSetorId(null)}
              className={`group flex w-full cursor-pointer items-center justify-between gap-2 rounded-md p-3 text-sm transition-colors hover:bg-white hover:shadow-sm ${
                selectedSetorId === null ? "bg-white shadow-sm" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <Users2 size={14} />
                <span>Todos os departamentos</span>
              </div>
              <ArrowRight
                size={14}
                className={
                  selectedSetorId === null
                    ? "block"
                    : "hidden group-hover:block"
                }
              />
            </li>

            {setoresOrdenados.map((setor) => (
              <li
                key={setor.uuid}
                onClick={() => setSelectedSetorId(setor.id)}
                className={`group flex w-full cursor-pointer items-center justify-between gap-2 rounded-md p-3 text-sm transition-colors hover:bg-white hover:shadow-sm ${
                  selectedSetorId === setor.id ? "bg-white shadow-sm" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <SetorIcon icon={setor.icon} nome={setor.nome} />
                  <span>{setor.nome}</span>
                </div>
                <ArrowRight
                  size={14}
                  className={
                    selectedSetorId === setor.id
                      ? "block"
                      : "hidden group-hover:block"
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="min-w-0 flex-1 border-blue-200 pt-8 md:border-l-2 md:pt-0 md:pl-8">
        <div role="searchbox" className="flex w-full justify-end pb-5">
          <div className="relative w-full sm:max-w-sm">
            <Search
              className="absolute top-1/2 left-2 -translate-y-1/2 text-blue-500"
              size={14}
            />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar pessoa ou área"
              className="w-full pr-3 pl-9 text-base outline-none focus-visible:border-blue-400 focus-visible:ring-3 focus-visible:ring-blue-400/50"
            />
          </div>
        </div>
        <Separator />

        {colaboradores.length === 0 ? (
          <p className="pt-10 text-center text-sm text-zinc-600">
            Nenhum colaborador encontrado.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {colaboradores.map((colaborador) => (
              <PersonCard
                key={colaborador.uuid}
                person={colaborador}
                setorNome={setorNomePorId.get(colaborador.idSetor)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
