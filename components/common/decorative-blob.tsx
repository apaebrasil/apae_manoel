import { cn } from "@/lib/utils"

interface DecorativeBlobProps {
  animate?: boolean
  className?: string
}

export function DecorativeBlob({
  animate = true,
  className,
}: DecorativeBlobProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -top-10 -right-8 h-32 w-32 rounded-full border-4 border-blue-300 bg-blue-200/40 sm:-top-16 sm:-right-10 sm:h-56 sm:w-56",
        animate && "animate-[float_6s_ease-in-out_infinite]",
        className
      )}
    />
  )
}
