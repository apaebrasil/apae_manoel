import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface DetailHeaderMetaItem {
  icon?: LucideIcon
  label: ReactNode
  emphasis?: boolean
}

interface DetailHeaderProps {
  badge: ReactNode
  title: ReactNode
  titleSize?: "md" | "lg"
  meta?: DetailHeaderMetaItem[]
  className?: string
}

export function DetailHeader({
  badge,
  title,
  titleSize = "md",
  meta,
  className,
}: DetailHeaderProps) {
  return (
    <header className={cn("mb-8", className)}>
      <span className="inline-flex w-fit items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase shadow-sm shadow-blue-600/30">
        {badge}
      </span>

      <h1
        className={cn(
          "mt-4 leading-tight font-bold text-balance text-blue-950",
          titleSize === "lg" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
        )}
      >
        {title}
      </h1>

      {meta && meta.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-blue-900/10 pb-6 text-sm text-blue-900/60">
          {meta.map((item, index) => (
            <span
              key={index}
              className={cn(
                "inline-flex items-center gap-1.5",
                item.emphasis && "font-medium"
              )}
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              {item.label}
            </span>
          ))}
        </div>
      )}
    </header>
  )
}
