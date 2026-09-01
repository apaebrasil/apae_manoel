"use client"

import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

export function ClearButtonFilter() {
  const {} = useRouter()
  return (
    <Button variant="outline" type="button">
      Limpar filtro
    </Button>
  )
}
