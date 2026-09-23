import { DocumentoItems } from "@/components/transparency/type"

interface GetDocumentosProps {
  idCategoria?: number
}

export async function getDocumentos({
  idCategoria,
}: GetDocumentosProps = {}): Promise<DocumentoItems> {
  try {
    const response = await fetch(
      "https://fluigdev.apaebrasil.org.br/portalapi/v1/documento"
    )

    if (!response.ok) {
      throw new Error("Erro ao buscar os documentos")
    }

    const data: DocumentoItems = await response.json()

    if (!idCategoria) {
      return data
    }

    return {
      itens: data.itens.filter(
        (document) => document.idCategoria === idCategoria
      ),
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro ao buscar dados: ${error.message}`, {
        cause: error,
      })
    }
    throw new Error("Erro ao buscar os dados da página Home")
  }
}
