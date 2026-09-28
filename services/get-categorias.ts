import "server-only"
import { CategoriaTransparencia } from "@/components/transparency/type"
import { getInfoWebSite } from "./get-info-website"
import { headers } from "next/headers"
import { notFound } from "next/navigation"

interface GetCategoriasProps {
  siteId: number
}

export async function getCategorias({
  siteId,
}: GetCategoriasProps): Promise<CategoriaTransparencia[]> {
  try {
    const headerList = await headers()
    const domain = headerList.get("host")

    if (!domain) {
      notFound()
    }
    const { categorias } = await getInfoWebSite({ domain })

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
