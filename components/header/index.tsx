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
        <div className="flex items-center justify-center gap-1.5 rounded-full">
          <Link href="/">
            <Image
              src={response.logo1_url}
              alt="Logo APAE"
              width={150}
              height={150}
              className="h-auto w-20 object-contain"
              title="Apae Braisl - Home"
            />
          </Link>

          <Link href="https://www.sgs.com/en/certified-clients-and-products/certified-client-directory">
            <Image
              src={response.logo2_url}
              alt="Logo SGQ"
              width={100}
              height={100}
              className="h-auto w-12 object-contain"
              title="Certified Client Directory"
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
