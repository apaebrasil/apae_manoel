import Image, { type StaticImageData } from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ProfileCardProps {
  photo: StaticImageData | string
  name: string
  bio: string
  className?: string
}

export function ProfileCard({ photo, name, bio, className }: ProfileCardProps) {
  return (
    <Card
      className={cn(
        "max-w-3xl border border-brand-border p-0 shadow-lg shadow-brand-strong/5",
        className
      )}
    >
      <CardContent className="grid grid-cols-1 items-center gap-6 p-6 md:grid-cols-[auto_1fr] md:gap-8 md:p-8">
        <div className="relative mx-auto h-32 w-32 shrink-0 overflow-hidden rounded-full bg-brand-subtle md:h-36 md:w-36">
          <Image
            src={photo}
            alt={name}
            className="h-full w-full object-contain"
            priority
          />
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-brand-strong md:text-2xl">
            {name}
          </h3>

          <p className="text-sm leading-relaxed font-normal text-zinc-800">
            {bio}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
