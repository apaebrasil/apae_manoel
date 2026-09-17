"use client"

import { HeartPlus, Minus, Plus, X } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

const DONATION_URL = "https://doeeajudeapaebrasil.com.br/"

export function DonationFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  if (isDismissed) {
    return (
      <Button
        type="button"
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-5 left-5 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-sm font-semibold text-foreground shadow-lg transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        aria-label="Reabrir convite de doação"
        title="Apoie este projeto"
      >
        <Plus size={16} />
      </Button>
    )
  }

  return (
    <aside
      className={`fixed bottom-5 left-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm transition-all duration-300 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-95"}`}
      aria-label="Convite de doação"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/15">
        <div className="flex items-center gap-3 bg-blue-900 px-4 py-3 text-primary-foreground">
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-lg text-primary-foreground/70 transition hover:bg-blue-300 hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            aria-label="Fechar convite de doação"
          >
            <X size={16} />
          </button>

          <Separator
            orientation="vertical"
            className="bg-primary-foreground/20"
          />

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="0 flex min-w-0 flex-1 cursor-pointer items-center justify-between gap-3 text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:outline-none"
            aria-expanded={isOpen}
            aria-controls="donation-details"
          >
            <span>
              <span className="block text-xs font-semibold tracking-[0.16em] text-primary-foreground uppercase">
                Doe e e ajude a APAE Brasil
              </span>
            </span>
            <span className="text-lg" aria-hidden="true">
              {isOpen ? <Minus size={20} /> : <Plus size={20} />}
            </span>
          </button>

          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15 text-lg"
            aria-hidden="true"
          >
            <HeartPlus size={20} />
          </span>
        </div>

        <div
          id="donation-details"
          className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            <div className="space-y-4 p-4">
              <p className="text-sm leading-6 text-muted-foreground">
                Se este conteúdo foi útil para você, uma contribuição voluntária
                faz toda a diferença. Você decide se quer participar.
              </p>
              <a
                href={DONATION_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground transition hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <span>Conhecer formas de apoiar</span>
                <span aria-hidden="true">→</span>
              </a>
              <p className="text-center text-xs text-muted-foreground">
                Você pode fechar este convite quando quiser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
