import Link from "next/link"

interface FooterNavigationProps {
  title: string
  linkCategory: {
    label: string
    href: string
  }[]
}

export function FooterNavigation({
  title,
  linkCategory,
}: FooterNavigationProps) {
  return (
    <nav aria-label="Links do rodape - Participe">
      <h3 className="mb-5 text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-3">
        {linkCategory.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
