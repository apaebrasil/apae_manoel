import Image from "next/image"
import Link from "next/link"

import { Navigation } from "../navigation"
import { notFound } from "next/navigation"
import { MenuItem } from "../navigation/type"

async function handleGetNavigationMenus(): Promise<MenuItem[]> {
  const response = await fetch(
    "https://fluigdev.apaebrasil.org.br/portalapi/v1/menu/",
    {
      method: "GET",
    }
  )
  console.log("response: ", response)

  if (!response.ok) {
    return notFound()
  }

  const data = await response.json()
  return data
}

export async function Header() {
  const response = await handleGetNavigationMenus()

  return (
    <div className="sticky top-0 z-50 flex h-auto w-full flex-col bg-linear-120 from-blue-900 to-blue-900">
      <header
        className="flex items-center justify-between px-4 py-2"
        role="navigation"
        aria-label="Navegacao principal"
      >
        <div className="flex size-16 items-center justify-center rounded-full">
          <Link href="/" className="text-sm">
            <Image
              src="/logo-transparente.png"
              alt="Logo APAE"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>
        </div>

        <Navigation.Root className="hidden lg:block">
          {response.map((navLink) => (
            <Navigation.Item key={navLink.id} navLink={navLink} />
          ))}
        </Navigation.Root>
      </header>
    </div>
  )
}
