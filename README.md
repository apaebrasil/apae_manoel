# Next.js template

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```

## Metadata / SEO por página

Hoje só `app/global-not-found.tsx` define `metadata`. O layout raiz
(`app/layout.tsx`) não tem `title`/`description`, e nenhuma `page.tsx` exporta
metadata própria.

No App Router **não é necessário criar um `layout.tsx` por página** para
definir meta tags. Cada `page.tsx` pode exportar sua própria metadata:

- **Páginas estáticas** — `export const metadata: Metadata = {...}` direto no
  arquivo (ex.: `app/(public)/page.tsx`, `quem-somos`, `voluntario`,
  `parceiro`, `eventos`).
- **Páginas dinâmicas** (rotas com `[siteId]`, `[categoria]`, `[documentId]`,
  `[slug]`, `[coordenadoria]`) — `export async function generateMetadata(props)`,
  buscando os dados com os mesmos `services/*` que a página já usa, para gerar
  título/descrição específicos daquele registro.
- **Layout raiz** — deve ganhar uma metadata base (`title.template`,
  `description` padrão, `metadataBase`, ícones) que serve de fallback para
  qualquer página que não sobrescrever.

**Exceção:** `metadata`/`generateMetadata` só funcionam em Server Components.
A rota `encontre-apae` é `"use client"` inteira, então ela precisa extrair a
parte interativa (busca/filtro) para um componente filho e deixar o
`page.tsx` como Server Component só com a `metadata` — ou, alternativamente,
ganhar um `layout.tsx` próprio apenas para isso.

## Componentes compartilhados (`components/common`)

Alguns blocos de UI se repetiam, com a mesma marcação, em várias páginas.
Eles foram extraídos para `components/common` como peças pequenas e
independentes (nenhuma delas "faz tudo" — cada uma resolve um pedaço):

- **`DecorativeBlob`** — o círculo decorativo desfocado usado nos banners de
  cabeçalho e nos painéis de status.
- **`SectionHeader`** — banner de cabeçalho de seção (ícone + selo/eyebrow +
  título + descrição). Suporta `variant="badge"` (selo colorido, título `h1`,
  usado em `quem-somos` e `transparencia/[siteId]`) e `variant="eyebrow"`
  (texto simples, usado em `encontre-apae` e `estrutura-organizacional`).
- **`DetailHeader`** — cabeçalho de página de detalhe (selo de categoria +
  título + linha de metadados como autor/data/tamanho). Usado nas páginas de
  documento (`transparencia/.../[documentId]`, `pdde/.../[documentId]`) e de
  notícia (`noticias/[siteId]/[slug]`).
- **`BackLink`** — link "voltar" com dois estilos (`variant="text"` no topo da
  página, `variant="pill"` no rodapé), usado nas mesmas páginas de detalhe.
- **`StatusPanel`** — painel de estado (ícone + título + descrição + ações),
  usado em `app/global-not-found.tsx` (404) e `app/(public)/error.tsx`.

Ao criar uma nova página de detalhe (documento, notícia, etc.) ou um novo
banner de seção, prefira reaproveitar esses componentes em vez de recriar a
marcação.
