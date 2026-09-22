"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { ArrowRight, Building2, Search, Users2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PersonCard } from "@/components/organizational-structure/person-card"
import { Setor } from "./type"

const TODOS_VALUE = "todos"

interface OrganizationalStructureProps {
  setores: Setor
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
    () => [...setores.itens].sort((a, b) => a.ordem - b.ordem),
    [setores]
  )

  const grupos = useMemo(() => {
    const termo = search.trim().toLowerCase()
    const setoresParaExibir = selectedSetorId
      ? setoresOrdenados.filter((setor) => setor.id === selectedSetorId)
      : setoresOrdenados

    return setoresParaExibir
      .map((setor) => ({
        setor,
        colaboradores: setor.colaboradores.filter(
          (colaborador) =>
            !termo ||
            colaborador.nome.toLowerCase().includes(termo) ||
            colaborador.cargo.toLowerCase().includes(termo)
        ),
      }))
      .filter((grupo) => grupo.colaboradores.length > 0)
  }, [setoresOrdenados, selectedSetorId, search])

  const totalColaboradores = useMemo(
    () =>
      grupos.reduce((total, grupo) => total + grupo.colaboradores.length, 0),
    [grupos]
  )

  return (
    <div className="flex flex-col gap-8 pb-16 md:flex-row md:pb-24">
      <div className="md:shrink-0">
        {/* Mobile: department navigation as a select */}
        <div className="md:hidden">
          <label
            htmlFor="setor-select"
            className="mb-1.5 block text-xs font-bold text-zinc-800"
          >
            Navegar por departamento
          </label>
          <Select
            value={
              selectedSetorId === null ? TODOS_VALUE : String(selectedSetorId)
            }
            onValueChange={(value) =>
              setSelectedSetorId(value === TODOS_VALUE ? null : Number(value))
            }
          >
            <SelectTrigger id="setor-select" className="w-full">
              <SelectValue placeholder="Todos os departamentos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TODOS_VALUE}>
                <Users2 size={14} />
                <span>Todos os departamentos</span>
              </SelectItem>
              {setoresOrdenados.map((setor) => (
                <SelectItem key={setor.uuid} value={String(setor.id)}>
                  <SetorIcon icon={setor.icon} nome={setor.nome} />
                  <span>{setor.nome}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="hidden w-full rounded-md border-2 border-blue-200 bg-blue-100 p-3 md:block md:w-72">
          <h3
            id="setores-heading"
            className="mb-3.5 text-xs font-bold text-zinc-800"
          >
            Navegar por departamento
          </h3>

          <ul className="space-y-1 pt-3" aria-labelledby="setores-heading">
            <li>
              <button
                type="button"
                onClick={() => setSelectedSetorId(null)}
                aria-pressed={selectedSetorId === null}
                className={`group flex w-full cursor-pointer items-center justify-between gap-2 rounded-md p-3 text-left text-sm transition-colors hover:bg-white hover:shadow-sm ${
                  selectedSetorId === null ? "bg-white shadow-sm" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <Users2 size={14} />
                  <span>Todos os departamentos</span>
                </div>
                <ArrowRight
                  size={14}
                  aria-hidden="true"
                  className={
                    selectedSetorId === null
                      ? "block"
                      : "hidden group-hover:block"
                  }
                />
              </button>
            </li>

            {setoresOrdenados.map((setor) => (
              <li key={setor.uuid}>
                <button
                  type="button"
                  onClick={() => setSelectedSetorId(setor.id)}
                  aria-pressed={selectedSetorId === setor.id}
                  className={`group flex w-full cursor-pointer items-center justify-between gap-2 rounded-md p-3 text-left text-sm transition-colors hover:bg-white hover:shadow-sm ${
                    selectedSetorId === setor.id ? "bg-white shadow-sm" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <SetorIcon icon={setor.icon} nome={setor.nome} />
                    <span>{setor.nome}</span>
                  </div>
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className={
                      selectedSetorId === setor.id
                        ? "block"
                        : "hidden group-hover:block"
                    }
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="min-w-0 flex-1 border-blue-200 pt-8 md:border-l-2 md:pt-0 md:pl-8">
        <div className="flex w-full justify-end pb-5">
          <div className="relative w-full sm:max-w-sm">
            <Search
              className="absolute top-1/2 left-2 -translate-y-1/2 text-blue-500"
              size={14}
              aria-hidden="true"
            />
            <Input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar pessoa ou área"
              aria-label="Buscar pessoa ou área"
              className="w-full pr-3 pl-9 text-base outline-none focus-visible:border-blue-400 focus-visible:ring-3 focus-visible:ring-blue-400/50"
            />
          </div>
        </div>
        <Separator />

        {totalColaboradores === 0 ? (
          <p className="pt-10 text-center text-sm text-zinc-600">
            Nenhum colaborador encontrado.
          </p>
        ) : (
          <div className="divide-y divide-blue-100">
            {grupos.map(({ setor, colaboradores }) => (
              <section
                key={setor.uuid}
                aria-labelledby={`setor-heading-${setor.uuid}`}
                className="py-6 first:pt-6 last:pb-0"
              >
                <div className="mb-4 flex items-center gap-2">
                  <SetorIcon icon={setor.icon} nome={setor.nome} />
                  <h2
                    id={`setor-heading-${setor.uuid}`}
                    className="text-lg font-bold text-zinc-900"
                  >
                    {setor.nome}
                  </h2>
                  <span className="text-xs font-medium text-zinc-500">
                    ({colaboradores.length})
                  </span>
                </div>

                <div
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
                  role="list"
                >
                  {colaboradores.map((colaborador) => (
                    <div key={colaborador.uuid} role="listitem">
                      <PersonCard person={colaborador} setorNome={setor.nome} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
