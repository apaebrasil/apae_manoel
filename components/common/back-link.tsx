import { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { cn } from "@/lib/utils"

interface BackLinkProps {
  href: string
  children: ReactNode
  variant?: "text" | "pill"
  className?: string
}

export function BackLink({
  href,
  children,
  variant = "text",
  className,
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 transition-colors",
        variant === "pill"
          ? "rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm shadow-blue-950/5 hover:border-blue-300 hover:bg-blue-50"
          : "mb-6 text-sm font-medium text-blue-900/70 hover:text-blue-900",
        className
      )}
    >
      <ArrowLeft className="h-4 w-4" />
      {children}
    </Link>
  )
}
