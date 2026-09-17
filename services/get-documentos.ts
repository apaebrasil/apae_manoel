import "server-only"
import { Documento } from "@/components/transparency/type"

interface GetDocumentosProps {
  idCategoria?: number
}

export async function getDocumentos({
  idCategoria,
}: GetDocumentosProps = {}): Promise<Documento[]> {
  try {
    const response = await fetch(
      "https://fluigdev.apaebrasil.org.br/portalapi/v1/documento"
    )

    if (!response.ok) {
      throw new Error("Erro ao buscar os documentos")
    }

    const data: Documento[] = await response.json()

    if (!idCategoria) return data

    return data.filter((documento) => documento.idCategoria === idCategoria)
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Erro ao buscar dados: ", error.message as ErrorOptions)
    }
    throw new Error("Erro ao buscar os dados da página Home")
  }
}
