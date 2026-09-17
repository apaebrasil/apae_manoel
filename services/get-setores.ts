import "server-only"
import { Setor } from "@/components/organizational-structure/type"

interface GetSetoresProps {
  idSite?: number
}

export async function getSetores({ idSite }: GetSetoresProps = {}): Promise<
  Setor[]
> {
  try {
    const response = await fetch(
      `https://fluigdev.apaebrasil.org.br/portalapi/v1/setor/${idSite}`
    )

    if (!response.ok) {
      throw new Error("Erro ao buscar os setores")
    }

    const data: Setor[] = await response.json()

    if (!idSite) {
      return data
    }

    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro ao buscar dados: ${error.message}`, {
        cause: error,
      })
    }
    throw new Error("Erro ao buscar os dados da página Home")
  }
}
