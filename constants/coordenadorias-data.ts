export interface CoordenadoriaDocumento {
  id: number
  nome: string
  tipo: string
  tamanho: string
  link: string
}

export interface Coordenadoria {
  id: number
  area: string
  coordenador: string
  cargo: string
  email: string
  telefone: string
  descricao: string
  atividades: string[]
  documentos: CoordenadoriaDocumento[]
}

export const coordenadorias: Coordenadoria[] = [
  {
    id: 1,
    area: "Educação Especial",
    coordenador: "Ana Paula Ribeiro",
    cargo: "Coordenadora Técnica de Educação",
    email: "educacao@apaebrasil.org.br",
    telefone: "(61) 3213-4500",
    descricao:
      "Acompanha e orienta as unidades da Rede Apae na oferta de educação especial e inclusiva, promovendo formações e o alinhamento com as diretrizes do MEC.",
    atividades: [
      "Formação continuada de professores da Rede Apae",
      "Seminário Nacional de Educação Inclusiva",
      "Assessoria pedagógica às unidades filiadas",
    ],
    documentos: [
      {
        id: 1,
        nome: "Relatório do Seminário Nacional de Educação Inclusiva 2024",
        tipo: "pdf",
        tamanho: "3,1 MB",
        link: "/",
      },
      {
        id: 2,
        nome: "Cronograma de formações 2025",
        tipo: "pdf",
        tamanho: "620 KB",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    area: "Saúde",
    coordenador: "Carlos Eduardo Menezes",
    cargo: "Coordenador Técnico de Saúde",
    email: "saude@apaebrasil.org.br",
    telefone: "(61) 3213-4510",
    descricao:
      "Responsável pelas diretrizes técnicas em saúde da Rede Apae, incluindo reabilitação, atenção multidisciplinar e integração com o SUS.",
    atividades: [
      "Encontro Nacional de Equipes Multidisciplinares",
      "Capacitação em protocolos de atenção à saúde",
      "Articulação com o Ministério da Saúde",
    ],
    documentos: [
      {
        id: 3,
        nome: "Protocolo de atenção multidisciplinar",
        tipo: "pdf",
        tamanho: "1,8 MB",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    area: "Assistência Social",
    coordenador: "Fernanda Souza Lima",
    cargo: "Coordenadora Técnica de Assistência Social",
    email: "assistenciasocial@apaebrasil.org.br",
    telefone: "(61) 3213-4520",
    descricao:
      "Orienta as unidades da Rede Apae quanto ao Sistema Único de Assistência Social (SUAS) e à oferta de serviços socioassistenciais.",
    atividades: [
      "Oficina sobre financiamento do SUAS",
      "Acompanhamento de inscrições em conselhos municipais",
      "Suporte técnico a projetos sociais",
    ],
    documentos: [
      {
        id: 4,
        nome: "Guia de financiamento do SUAS para unidades filiadas",
        tipo: "pdf",
        tamanho: "2,0 MB",
        link: "/",
      },
      {
        id: 5,
        nome: "Modelo de plano de trabalho socioassistencial",
        tipo: "docx",
        tamanho: "340 KB",
        link: "/",
      },
    ],
  },
]
