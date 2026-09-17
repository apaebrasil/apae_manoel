"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { CategoriaTransparencia } from "./type"
import { DynamicIcon, IconName } from "lucide-react/dynamic"

interface CategoryCardProps {
  categoria: CategoriaTransparencia
  siteId: string
  documentCount: number
  index: number
  icon: IconName
}

export function CategoryCard({
  categoria,
  siteId,
  documentCount,
  index,
  icon,
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={`/transparencia/${siteId}/${categoria.id}`}
        className="group flex w-full flex-col items-start gap-4 rounded-2xl border-2 border-blue-200 bg-white p-6 text-left shadow-sm shadow-blue-950/5 transition-colors hover:border-blue-300 hover:shadow-md"
      >
        <div className="flex w-full items-start justify-between">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-800 group-hover:bg-blue-900 group-hover:text-white"
            aria-hidden="true"
          >
            <DynamicIcon name={icon} />
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold text-blue-950">
            {categoria.titulo}
          </h3>
          <p className="mt-1 text-sm leading-relaxed font-normal text-blue-900/90">
            {categoria.descricao}
          </p>
        </div>

        <div className="mt-auto flex w-full items-center justify-between pt-2">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            {documentCount} {documentCount === 1 ? "documento" : "documentos"}
          </Badge>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
            Ver documentos
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
