import Link from "next/link"

import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Submenu } from "./type"

type NavDropdownLinkItemProps = Submenu & {
  className?: string
  siteId: number
}

export function NavDropdownLinkItem({
  descricao,
  link,
  nome,
  siteId,
  className,
}: NavDropdownLinkItemProps) {
  const isNeedsSiteId =
    link == "/noticias" ||
    link == "/evento" ||
    link == "/estrutura-organizacional"
  return (
    <li className="min-w-0 p-2 transition-colors hover:rounded-xl hover:bg-blue-100/80">
      <NavigationMenuLink
        className={cn(
          navigationMenuTriggerStyle(),
          "block h-auto w-full min-w-0 items-start bg-transparent hover:bg-white/10 hover:text-blue-950 focus:bg-white/10 focus:text-blue-950",
          className
        )}
        render={
          <Link href={isNeedsSiteId ? `${link}/${siteId}` : link}>
            <div className="flex min-w-0 flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{nome}</div>
              <div className="line-clamp-2 min-w-0 text-muted-foreground">
                {descricao}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  )
}
