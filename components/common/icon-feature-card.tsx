import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface IconFeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  linkLabel?: string
  className?: string
}

export function IconFeatureCard({
  icon: Icon,
  title,
  description,
  href,
  linkLabel = "Conheço esta área",
  className,
}: IconFeatureCardProps) {
  return (
    <Card
      className={cn(
        "group border border-brand-border shadow-lg shadow-brand-strong/5 transition-transform duration-300 hover:-translate-y-1.5",
        className
      )}
    >
      <CardContent>
        <div className="w-fit rounded-full bg-brand-subtle p-2.5">
          <Icon size={20} className="text-brand-subtle-foreground" />
        </div>

        <h3 className="mt-6 text-xl font-semibold text-brand-strong">
          {title}
        </h3>

        <p className="mt-2 text-base font-normal text-zinc-800">
          {description}
        </p>

        {href && (
          <Link
            href={href}
            className="mt-6 flex items-center gap-1.5 text-sm font-medium text-brand-emphasis group-hover:underline"
          >
            <span>{linkLabel}</span>
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-2"
            />
          </Link>
        )}
      </CardContent>
    </Card>
  )
}
