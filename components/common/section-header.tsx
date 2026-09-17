import { LucideIcon, Zap } from "lucide-react"

import { cn } from "@/lib/utils"
import { DecorativeBlob } from "./decorative-blob"

interface SectionHeaderProps {
  subtitle: string
  title: string
  description: string
  icon?: LucideIcon
  variant?: "eyebrow" | "badge"
  as?: "h1" | "h2"
}

export function SectionHeader({
  subtitle,
  title,
  description,
  icon: Icon = Zap,
  variant = "eyebrow",
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <header className="relative container mx-auto mb-10 overflow-hidden rounded-lg border-2 border-blue-200 bg-blue-100/20 p-6 sm:p-10">
      <DecorativeBlob />

      <div className="relative z-10 flex flex-col gap-5">
        {variant === "badge" ? (
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase shadow-sm shadow-blue-600/30">
            <Icon className="h-3.5 w-3.5" />
            {subtitle}
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 text-xs font-bold text-zinc-800 uppercase">
            <Icon size={16} /> {subtitle}
          </span>
        )}

        <Heading
          className={cn(
            "max-w-2xl text-3xl font-bold text-balance sm:text-4xl md:text-5xl lg:text-6xl",
            variant === "badge" ? "text-blue-950" : "text-black"
          )}
        >
          {title}
        </Heading>

        <p
          className={cn(
            "max-w-2xl font-normal",
            variant === "badge"
              ? "text-base text-blue-900/80"
              : "text-sm text-zinc-800"
          )}
        >
          {description}
        </p>
      </div>
    </header>
  )
}
