import { footerLinks, socialLinks } from "@/constants"
import LogoApae from "@public/logo-transparente.png"
import Image from "next/image"
import Link from "next/link"
import { FooterNavigation } from "./footer-navigation"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-blue-950" role="contentinfo">
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="group mb-6 inline-block"
              aria-label="APAE Brasil - Pagina inicial"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={LogoApae}
                  alt="Logo Apae brasil"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
            <p className="mb-6 text-justify text-sm leading-relaxed text-primary-foreground/80">
              A maior rede de atendimento a pessoa com deficiencia intelectual e
              multipla do Brasil. Ha mais de 70 anos promovendo inclusao,
              educacao e cidadania.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20"
                  aria-label={`Siga-nos no ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <FooterNavigation
            title="Institucional"
            linkCategory={footerLinks.institucional}
          />

          <FooterNavigation
            title="Serviços"
            linkCategory={footerLinks.servicos}
          />

          <FooterNavigation
            title="Participe"
            linkCategory={footerLinks.participe}
          />

          <FooterNavigation
            title="Contato"
            linkCategory={footerLinks.contato}
          />
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-primary-foreground/70 md:text-left">
              {new Date().getFullYear()} APAE Brasil - Federacao Nacional das
              APAEs. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="#privacidade"
                className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                Politica de Privacidade
              </Link>
              <Link
                href="#termos"
                className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                Termos de Uso
              </Link>
              <Link
                href="#acessibilidade"
                className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                Acessibilidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
