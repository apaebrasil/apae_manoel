"use client"

import {
  Accessibility,
  Contrast,
  MoveDiagonal,
  RotateCcw,
  Underline,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

const STORAGE_KEY = "a11y-preferences"
const MIN_FONT_SCALE = 0.9
const MAX_FONT_SCALE = 1.3
const FONT_SCALE_STEP = 0.1

type A11yPreferences = {
  fontScale: number
  highContrast: boolean
  underlineLinks: boolean
  reduceMotion: boolean
}

const DEFAULT_PREFERENCES: A11yPreferences = {
  fontScale: 1,
  highContrast: false,
  underlineLinks: false,
  reduceMotion: false,
}

function loadPreferences(): A11yPreferences {
  if (typeof window === "undefined") {
    return DEFAULT_PREFERENCES
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return DEFAULT_PREFERENCES
    }
    return { ...DEFAULT_PREFERENCES, ...JSON.parse(raw) }
  } catch {
    return DEFAULT_PREFERENCES
  }
}

function applyPreferences(preferences: A11yPreferences) {
  const root = document.documentElement
  root.style.setProperty("--a11y-font-scale", String(preferences.fontScale))
  root.classList.toggle("a11y-high-contrast", preferences.highContrast)
  root.classList.toggle("a11y-underline-links", preferences.underlineLinks)
  root.classList.toggle("a11y-reduce-motion", preferences.reduceMotion)
}

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [preferences, setPreferences] = useState<A11yPreferences>(
    loadPreferences
  )

  useEffect(() => {
    applyPreferences(preferences)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences))
  }, [preferences])

  function updatePreferences(patch: Partial<A11yPreferences>) {
    setPreferences((current) => ({ ...current, ...patch }))
  }

  function changeFontScale(direction: 1 | -1) {
    updatePreferences({
      fontScale: Math.min(
        MAX_FONT_SCALE,
        Math.max(
          MIN_FONT_SCALE,
          Number(
            (preferences.fontScale + direction * FONT_SCALE_STEP).toFixed(2)
          )
        )
      ),
    })
  }

  function resetPreferences() {
    setPreferences(DEFAULT_PREFERENCES)
  }

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {isOpen && (
        <div
          role="dialog"
          aria-label="Menu de acessibilidade"
          className="mb-3 w-[calc(100vw-2.5rem)] max-w-xs overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/15"
        >
          <div className="flex items-center gap-3 bg-blue-900 px-4 py-3 text-primary-foreground">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15"
              aria-hidden="true"
            >
              <Accessibility size={20} />
            </span>
            <span className="flex-1 text-xs font-semibold tracking-[0.16em] uppercase">
              Acessibilidade
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-primary-foreground/70 transition hover:bg-blue-300 hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              aria-label="Fechar menu de acessibilidade"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-4 p-4">
            <div>
              <span className="mb-2 block text-sm font-medium text-foreground">
                Tamanho do texto
              </span>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon-sm"
                  onClick={() => changeFontScale(-1)}
                  disabled={preferences.fontScale <= MIN_FONT_SCALE}
                  aria-label="Diminuir tamanho do texto"
                >
                  <ZoomOut size={16} />
                </Button>
                <span className="min-w-12 flex-1 text-center text-sm text-muted-foreground tabular-nums">
                  {Math.round(preferences.fontScale * 100)}%
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon-sm"
                  onClick={() => changeFontScale(1)}
                  disabled={preferences.fontScale >= MAX_FONT_SCALE}
                  aria-label="Aumentar tamanho do texto"
                >
                  <ZoomIn size={16} />
                </Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  updatePreferences({ highContrast: !preferences.highContrast })
                }
                aria-pressed={preferences.highContrast}
                className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg border border-border px-3 py-2 text-left text-sm font-medium text-foreground transition hover:bg-muted aria-pressed:border-blue-900 aria-pressed:bg-blue-900 aria-pressed:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <Contrast size={16} className="shrink-0" />
                Alto contraste
              </button>

              <button
                type="button"
                onClick={() =>
                  updatePreferences({
                    underlineLinks: !preferences.underlineLinks,
                  })
                }
                aria-pressed={preferences.underlineLinks}
                className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg border border-border px-3 py-2 text-left text-sm font-medium text-foreground transition hover:bg-muted aria-pressed:border-blue-900 aria-pressed:bg-blue-900 aria-pressed:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <Underline size={16} className="shrink-0" />
                Sublinhar links
              </button>

              <button
                type="button"
                onClick={() =>
                  updatePreferences({
                    reduceMotion: !preferences.reduceMotion,
                  })
                }
                aria-pressed={preferences.reduceMotion}
                className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg border border-border px-3 py-2 text-left text-sm font-medium text-foreground transition hover:bg-muted aria-pressed:border-blue-900 aria-pressed:bg-blue-900 aria-pressed:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <MoveDiagonal size={16} className="shrink-0" />
                Reduzir movimento
              </button>
            </div>

            <Separator />

            <button
              type="button"
              onClick={resetPreferences}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <RotateCcw size={14} />
              Restaurar padrão
            </button>
          </div>
        </div>
      )}

      <Button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-label={
          isOpen ? "Fechar menu de acessibilidade" : "Abrir menu de acessibilidade"
        }
        title="Acessibilidade"
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-border bg-blue-900 text-primary-foreground shadow-lg transition hover:-translate-y-1 hover:bg-blue-800 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <Accessibility size={22} />
      </Button>
    </div>
  )
}
