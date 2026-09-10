import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { MenuItem } from "@/components/navigation/type"
import { MobileNavItem } from "./mobile-nav-item"

interface MobileNavigationProps {
  orderMenus: MenuItem[]
  siteId: number
}

export function MobileNavigation({
  orderMenus,
  siteId,
}: MobileNavigationProps) {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        className="z-50 flex cursor-pointer md:hidden"
        render={
          <Button
            variant="ghost"
            className="border-none bg-transparent hover:bg-transparent"
          />
        }
      >
        <Menu size={32} className="text-lg text-white" aria-label="Menu" />
        <span className="sr-only">Abrir menu</span>
      </DrawerTrigger>
      <DrawerContent className="bg-blue-950 [--drawer-content-width:20rem]">
        <DrawerHeader className="flex-row items-center justify-between">
          <DrawerTitle className="text-white">Menu</DrawerTitle>
          <DrawerClose
            render={
              <Button
                variant="outline"
                size="icon"
                className="border-none bg-transparent text-white"
              />
            }
          >
            <X aria-label="Fechar menu" />
            <span className="sr-only">Fechar menu</span>
          </DrawerClose>
        </DrawerHeader>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
          {orderMenus.map((item) => (
            <MobileNavItem key={item.uuid} navLink={item} siteId={siteId} />
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  )
}
