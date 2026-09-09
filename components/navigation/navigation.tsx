import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

interface NavigationProps {
  children: React.ReactNode
  className?: string
}

export function NavigationRoot({ children, className }: NavigationProps) {
  return (
    <>
      <NavigationMenu
        viewport={false}
        align="center"
        className={(cn("hidden items-center md:flex"), className)}
      >
        <NavigationMenuList className="relative flex gap-2 lg:gap-4">
          {children}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
