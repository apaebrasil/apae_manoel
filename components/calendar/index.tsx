"use client"

import { ptBR } from "react-day-picker/locale"
import { Calendar } from "../ui/calendar"

export function BraszilianCalendar() {
  return <Calendar mode="range" className="px-0" locale={ptBR} />
}
