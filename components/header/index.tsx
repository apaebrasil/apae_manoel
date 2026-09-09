import Image from "next/image"
import Link from "next/link"

import { Navigation } from "../navigation"
import { fetch } from "@/services"
import { MobileNavigation } from "../mobile-navigation"

export async function Header() {
  const response = await fetch.getInfoWebSite({
    domain: "apaebrasil.org.br",
  })

  const orderMenus = (response.menus ?? []).toSorted(
    (a, b) => Number(a.ordem) - Number(b.ordem)
  )

  return (
    <div className="sticky top-0 z-50 flex h-auto w-full flex-col bg-linear-120 from-blue-950 to-blue-950">
      <header
        className="flex items-center justify-between px-4 py-2"
        role="navigation"
        aria-label="Navegacao principal"
      >
        <div className="flex size-16 items-center justify-center rounded-full">
          <Link href="/" className="flex items-center gap-5 text-sm">
            <Image
              src={response.logo1_url}
              alt="Logo APAE"
              width={150}
              height={150}
              className="object-contain"
            />

            <Image
              src={response.logo2_url}
              alt="Logo SGQ"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>

        <Navigation.Root className="hidden lg:block">
          {orderMenus.map((navLink) => (
            <Navigation.Item
              key={navLink.id}
              navLink={navLink}
              siteId={response.id}
            />
          ))}
        </Navigation.Root>

        <MobileNavigation orderMenus={orderMenus} siteId={response.id} />
      </header>
    </div>
  )
}
