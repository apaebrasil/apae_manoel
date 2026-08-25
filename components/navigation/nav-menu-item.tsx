import Link from "next/link"

import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { NavDropdownContent } from "@/components/navigation/nav-dropdown-content"

import { cn } from "@/lib/utils"
import { MenuItem } from "./type"

const triggerStyles =
  "bg-transparent text-white transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-popup-open:bg-white/15 data-popup-open:text-white"

export function NavMenuItem({ navLink }: { navLink: MenuItem }) {
  const hasSubItems = navLink.submenus.length > 0
  const hasLinkExternal = navLink.interno
  return (
    <NavigationMenuItem className="static">
      {hasSubItems ? (
        <NavigationMenuTrigger className={triggerStyles}>
          {navLink.nome}
        </NavigationMenuTrigger>
      ) : (
        <NavigationMenuLink
          render={
            <Link
              href={navLink.link}
              target={hasLinkExternal ? "" : "_blank"}
            />
          }
          className={cn(
            "h-9 rounded-md px-5 text-sm font-medium",
            triggerStyles
          )}
        >
          {navLink.nome}
        </NavigationMenuLink>
      )}

      {hasSubItems && <NavDropdownContent items={navLink.submenus} />}
    </NavigationMenuItem>
  )
}
