import { ComponentPropsWithRef } from "react"
import { cn } from "@/lib/utils"

type SectionEyebrowProps = ComponentPropsWithRef<"span">

export function SectionEyebrow({ className, ...props }: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        "mb-2 block text-xs font-semibold tracking-wide text-brand-emphasis uppercase",
        className
      )}
      {...props}
    />
  )
}
