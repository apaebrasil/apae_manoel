import { NavigationMenuContent } from "@/components/ui/navigation-menu"
import { NavDropdownLinkItem } from "@/components/navigation/nav-dropdown-link-item"
import { Submenu } from "./type"

export function NavDropdownContent({ items }: { items: Submenu[] }) {
  return (
    <NavigationMenuContent className="w-140 overflow-hidden rounded-md border border-slate-200 bg-white p-4 shadow-2xl lg:w-180">
      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {items.map((item) => (
          <NavDropdownLinkItem key={item.link} {...item} />
        ))}
      </ul>
    </NavigationMenuContent>
  )
}
