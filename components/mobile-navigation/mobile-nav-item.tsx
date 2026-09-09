import Link from "next/link"

import { DrawerClose } from "@/components/ui/drawer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { MenuItem } from "@/components/navigation/type"

interface MobileNavItemProps {
  navLink: MenuItem
  siteId: number
}

const linkStyles =
  "block rounded-md px-3 py-2 text-sm font-medium text-blue-950 transition-colors hover:bg-blue-100/80"

export function MobileNavItem({ navLink, siteId }: MobileNavItemProps) {
  const hasSubItems = navLink.submenus.length > 0
  const isInternLink = navLink.interno

  if (!hasSubItems) {
    return (
      <DrawerClose
        nativeButton={false}
        className={cn(linkStyles, "w-full text-left")}
        render={
          <Link
            href={isInternLink ? `${navLink.link}/${siteId}` : navLink.link}
            target={isInternLink ? "" : "_blank"}
            className="text-white"
          />
        }
      >
        {navLink.nome}
      </DrawerClose>
    )
  }

  return (
    <Accordion>
      <AccordionItem className="border-none">
        <AccordionTrigger
          className={cn(linkStyles, "flex text-white hover:no-underline")}
        >
          {navLink.nome}
        </AccordionTrigger>
        <AccordionContent className="pl-3">
          <ul className="flex flex-col gap-1">
            {navLink.submenus.map((submenu) => {
              const needsSiteId =
                submenu.link == "/noticias" ||
                submenu.link == "/evento" ||
                submenu.link == "/estrutura-organizacional" ||
                submenu.link == "/transparencia"

              return (
                <li key={submenu.uuid}>
                  <DrawerClose
                    nativeButton={false}
                    className={cn(linkStyles, "w-full text-left font-normal")}
                    render={
                      <Link
                        href={
                          needsSiteId
                            ? `${submenu.link}/${siteId}`
                            : submenu.link
                        }
                        className="text-zinc-100"
                      />
                    }
                  >
                    {submenu.nome}
                  </DrawerClose>
                </li>
              )
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
