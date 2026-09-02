"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Sponsor } from "@/types/sponsor-type"

interface PartnerCardProps {
  partner: Sponsor
  siteId: number
}

export function PartnerCard({ partner, siteId }: PartnerCardProps) {
  return (
    <Link
      href={`/parceiros/${siteId}/${partner.uuid}`}
      rel="noopener noreferrer"
      role="listitem"
      aria-label={`Visitar site do parceiro ${partner.nome}`}
      className="group relative flex h-32 w-40 shrink-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-white p-4 shadow-xs ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-3 hover:ring-blue-300"
    >
      <Image
        src={partner.logo_url}
        alt={`Logo ${partner.nome}`}
        className="max-h-14 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
        width={500}
        height={500}
      />

      <span className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-950 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>

      <span className="sr-only">{partner.nome}</span>
    </Link>
  )
}
