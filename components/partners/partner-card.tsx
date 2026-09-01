"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { PartnerItem } from "@/constants/partners"

interface PartnerCardProps {
  partner: PartnerItem
  index: number
}

export function PartnerCard({ partner, index }: PartnerCardProps) {
  return (
    <motion.a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      role="listitem"
      aria-label={`Visitar site do parceiro ${partner.name}`}
      className="group relative flex h-32 w-40 shrink-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-white p-4 shadow-xs ring-1 ring-foreground/10 transition-colors duration-300 hover:ring-blue-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ y: -6, boxShadow: "0 16px 32px -12px rgba(23,37,84,0.25)" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={partner.logo}
        alt={`Logo ${partner.name}`}
        className="max-h-14 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
      />

      <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-950 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>

      <span className="sr-only">{partner.name}</span>
    </motion.a>
  )
}
