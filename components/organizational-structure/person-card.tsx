"use client"

import { useState } from "react"
import Image from "next/image"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarDays, Check, Copy, Mail, Phone } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Colaborador } from "./type"

interface PersonCardProps {
  person: Colaborador
  setorNome?: string
}

function getInitials(nome: string) {
  return nome
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
}

interface AvatarProps {
  nome: string
  foto: string
  size: number
  className?: string
  textClassName?: string
}

function PersonAvatar({
  nome,
  foto,
  size,
  className,
  textClassName,
}: AvatarProps) {
  const [failed, setFailed] = useState(false)

  if (!foto || failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-blue-100 font-bold text-blue-700 ${textClassName ?? ""} ${className ?? ""}`}
      >
        {getInitials(nome)}
      </div>
    )
  }

  return (
    <Image
      src={foto}
      alt={nome}
      fill
      sizes={`${size}px`}
      className={`object-cover ${className ?? ""}`}
      onError={() => setFailed(true)}
    />
  )
}

interface CopyFieldProps {
  icon: typeof Mail
  value: string
  href: string
  label: string
}

function CopyField({ icon: Icon, value, href, label }: CopyFieldProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex items-center gap-1 rounded-md pl-1 transition-colors hover:bg-blue-50">
      <a
        href={href}
        className="flex min-w-0 flex-1 items-center gap-2 py-1.5 text-sm text-zinc-700 hover:text-blue-700"
      >
        <Icon className="h-4 w-4 shrink-0 text-blue-500" />
        <span className="truncate">{value}</span>
      </a>
      <Button
        type="button"
        variant="ghost"
        size="icon-xs"
        aria-label={`Copiar ${label}`}
        onClick={handleCopy}
        className="shrink-0"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-blue-600" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </Button>
    </div>
  )
}

export function PersonCard({ person, setorNome }: PersonCardProps) {
  return (
    <Dialog>
      <DialogTrigger className="group flex w-full cursor-pointer flex-col items-center gap-3 rounded-xl border-2 border-blue-200 bg-white p-5 text-center transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-blue-100">
          <PersonAvatar
            nome={person.nome}
            foto={person.foto}
            size={80}
            textClassName="text-sm"
          />
        </div>

        <div>
          <h4 className="text-sm font-bold text-zinc-900">{person.nome}</h4>
          <p className="text-xs text-zinc-600">{person.cargo}</p>
        </div>

        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
          {person.lotacao}
        </Badge>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader className="items-center text-center">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-blue-100">
            <PersonAvatar
              nome={person.nome}
              foto={person.foto}
              size={96}
              textClassName="text-lg"
            />
          </div>

          <DialogTitle className="text-lg">{person.nome}</DialogTitle>
          <DialogDescription className="text-sm">
            {person.cargo}
          </DialogDescription>

          <div className="flex flex-wrap justify-center gap-1.5">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              {person.lotacao}
            </Badge>
            {setorNome && (
              <Badge
                variant="outline"
                className="border-blue-200 text-blue-700"
              >
                {setorNome}
              </Badge>
            )}
          </div>
        </DialogHeader>

        {person.descricao && (
          <p className="text-sm leading-relaxed text-zinc-700">
            {person.descricao}
          </p>
        )}

        <Separator />

        {person.data_admissao && (
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <CalendarDays className="h-3.5 w-3.5 shrink-0 text-blue-500" />
            <span>
              Na equipe desde{" "}
              {format(new Date(person.data_admissao), "d 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </span>
          </div>
        )}

        <div className="space-y-1">
          {person.email && (
            <CopyField
              icon={Mail}
              value={person.email}
              href={`mailto:${person.email}`}
              label="e-mail"
            />
          )}
          {person.contato && (
            <CopyField
              icon={Phone}
              value={person.contato}
              href={`tel:${person.contato}`}
              label="telefone"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
