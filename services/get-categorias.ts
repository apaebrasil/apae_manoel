import "server-only"
import { CategoriaTransparencia } from "@/components/transparency/type"
import { getInfoWebSite } from "./get-info-website"

interface GetCategoriasProps {
  siteId: number
}

export async function getCategorias({
  siteId,
}: GetCategoriasProps): Promise<CategoriaTransparencia[]> {
  const { categorias } = await getInfoWebSite({ domain: "apaebrasil.org.br" })

  return categorias.filter(
    (categoria) =>
      categoria.idSite === siteId && categoria.tipo === "transparencia"
  )
}
