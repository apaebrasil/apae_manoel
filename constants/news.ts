export interface NewsItem {
  id: string
  category: string
  created_at: string
  title: string
  subtitle?: string
  author: {
    name: string
    avatar?: string
  }
  read_time: string
  tags: string[]
  featured?: boolean
  description?: string
  image?: string
  content: string
}

export const news: NewsItem[] = [
  {
    id: "f2a7b9c4-3e8d-4f1a-8b6c-5d9e2f4a7b1c",
    category: "Trabalho",
    created_at: "2026-03-15T09:30:00Z",
    title:
      "Programa de empregabilidade coloca dezenas de pessoas com deficiência no mercado de trabalho",
    subtitle:
      "Iniciativa oferece capacitação profissional e intermediação direta com empresas parceiras.",
    author: {
      name: "Fernando Ribeiro",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100",
    },
    read_time: "5 min",
    tags: ["Empregabilidade", "Mercado de Trabalho", "Capacitação"],
    featured: true,
    description:
      "Nos últimos seis meses, o programa já encaminhou mais de 80 pessoas para vagas formais em empresas parceiras.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
    content:
      "O programa de empregabilidade da Rede segue ampliando resultados ao conectar candidatos capacitados a empresas parceiras comprometidas com a inclusão. Além da intermediação de vagas, a iniciativa oferece oficinas de currículo, simulações de entrevista e acompanhamento pós-contratação para garantir a permanência no emprego.",
  },
  {
    id: "a6d3e8f1-2c9b-4a7e-9d5f-3b1c8e6a4d2f",
    category: "Tecnologia",
    created_at: "2026-03-15T14:00:00Z",
    title:
      "Rede lança aplicativo de acessibilidade para facilitar comunicação de famílias atendidas",
    subtitle:
      "Ferramenta digital centraliza agendamentos, comunicados e materiais de apoio em um só lugar.",
    author: {
      name: "Equipe de Tecnologia",
      avatar:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100",
    },
    read_time: "4 min",
    tags: ["Tecnologia", "Acessibilidade", "Inovação"],
    featured: true,
    description:
      "O aplicativo foi desenvolvido com recursos de leitura de tela e alto contraste, pensado para diferentes perfis de usuários.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    content:
      "Após meses de desenvolvimento em parceria com especialistas em acessibilidade digital, a Rede lançou oficialmente seu aplicativo voltado às famílias atendidas. A ferramenta permite acompanhar agendamentos, receber comunicados institucionais e acessar materiais de apoio, tudo com recursos pensados para diferentes necessidades de acessibilidade.",
  },
  {
    id: "c4f8a1d6-5b2e-4c9a-8f3d-6e1a9c4b7d2e",
    category: "Institucional",
    created_at: "2026-03-16T10:15:00Z",
    title:
      "Fenapaes assina acordo de cooperação com órgãos públicos para ampliar políticas de inclusão",
    subtitle:
      "Parceria prevê ações conjuntas em acessibilidade urbana, saúde e educação nos próximos dois anos.",
    author: {
      name: "Comunicação Fenapaes",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    },
    read_time: "6 min",
    tags: ["Institucional", "Políticas Públicas", "Cooperação"],
    featured: true,
    description:
      "O acordo estabelece metas específicas e cronograma de acompanhamento para garantir a efetividade das ações previstas.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
    content:
      "A assinatura do acordo de cooperação marca um novo passo na relação entre a Fenapaes e o poder público. O documento prevê ações conjuntas em áreas estratégicas como acessibilidade urbana, ampliação do acesso à saúde e fortalecimento de políticas educacionais inclusivas, com metas e prazos definidos para os próximos dois anos.",
  },
  {
    id: "d9e2b5a8-7f4c-4d1e-9b6a-8c3f5e2d9a7b",
    category: "Família",
    created_at: "2026-03-16T16:30:00Z",
    title:
      "Grupo de apoio a famílias completa um ano com resultados positivos em acolhimento",
    subtitle:
      "Encontros mensais ajudam pais e responsáveis a trocar experiências e fortalecer a rede de suporte mútuo.",
    author: {
      name: "Patrícia Gomes",
      avatar:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100",
    },
    read_time: "3 min",
    tags: ["Família", "Acolhimento", "Comunidade"],
    featured: true,
    description:
      "Mais de 200 famílias já passaram pelos encontros, que combinam rodas de conversa com orientação de psicólogos e assistentes sociais.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800",
    content:
      "O grupo de apoio a famílias completou um ano de atividades reunindo pais e responsáveis em encontros mensais de acolhimento e troca de experiências. Com a participação de psicólogos e assistentes sociais, a iniciativa tem se consolidado como um espaço importante de escuta e fortalecimento emocional para quem enfrenta desafios semelhantes no dia a dia.",
  },
  {
    id: "e7c1f4a9-6d8b-4e2c-8a5f-9b3d6e1c4a8f",
    category: "Evento",
    created_at: "2026-03-17T11:00:00Z",
    title:
      "Seminário reúne especialistas para debater o futuro das políticas de inclusão no Brasil",
    subtitle:
      "Evento de dois dias contou com painéis sobre legislação, mercado de trabalho e tecnologia assistiva.",
    author: {
      name: "Carlos Eduardo",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    },
    read_time: "5 min",
    tags: ["Evento", "Políticas de Inclusão", "Debate"],
    featured: true,
    description:
      "Entre os participantes estiveram representantes de universidades, empresas e órgãos governamentais de diferentes estados.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    content:
      "O seminário reuniu, ao longo de dois dias, especialistas, gestores públicos e representantes da sociedade civil para discutir os principais desafios e avanços das políticas de inclusão no país. Os painéis abordaram temas como atualização da legislação, ampliação do mercado de trabalho inclusivo e o papel da tecnologia assistiva na autonomia das pessoas com deficiência.",
  },
]
