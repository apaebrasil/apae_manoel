import "server-only"
import { Setor } from "@/components/organizational-structure/type"

interface GetSetoresProps {
  idSite?: number
}

export async function getSetores({ idSite }: GetSetoresProps = {}): Promise<
  Setor[]
> {
  const response = await fetch(
    "https://fluigdev.apaebrasil.org.br/portalapi/v1/setor"
  )

  if (!response.ok) {
    throw new Error("Erro ao buscar os setores")
  }

  const data: Setor[] = await response.json()

  if (!idSite) {
    return data
  }

  return data.filter((setor) => setor.idSite === idSite)
}
