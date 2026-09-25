import "server-only"
import { CategoriaTransparencia } from "@/components/transparency/type"
import { getInfoWebSite } from "./get-info-website"

interface GetCategoriasProps {
  siteId: number
}

export async function getCategorias({
  siteId,
}: GetCategoriasProps): Promise<CategoriaTransparencia[]> {
  try {
    const { categorias } = await getInfoWebSite({ domain: "apaemanoel.org.br" })

    return categorias.filter((categoria) => categoria.idSite === siteId)
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro ao buscar dados: ${error.message}`, {
        cause: error,
      })
    }
    throw new Error("Erro ao buscar os dados da página Home")
  }
}
