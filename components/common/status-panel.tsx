import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { DecorativeBlob } from "./decorative-blob"

interface StatusPanelProps {
  icon: LucideIcon
  code?: ReactNode
  title: ReactNode
  titleAs?: "h1" | "h2"
  description: ReactNode
  extra?: ReactNode
  actions?: ReactNode
  className?: string
}

export function StatusPanel({
  icon: Icon,
  code,
  title,
  titleAs: Heading = "h2",
  description,
  extra,
  actions,
  className,
}: StatusPanelProps) {
  return (
    <div
      className={cn(
        "relative container mx-auto max-w-2xl overflow-hidden rounded-lg border-2 border-blue-200 bg-blue-100/20 p-8 text-center sm:p-14",
        className
      )}
    >
      <DecorativeBlob />

      <div className="relative z-10 flex flex-col items-center gap-5">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-blue-300 bg-white p-4 text-blue-600">
          <Icon size={32} />
        </span>

        {code}

        <Heading className="text-3xl font-bold text-balance text-black sm:text-4xl">
          {title}
        </Heading>

        <p className="max-w-md text-sm font-normal text-zinc-700 sm:text-base">
          {description}
        </p>

        {extra}

        {actions}
      </div>
    </div>
  )
}
