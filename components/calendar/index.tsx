"use client"

import { useState } from "react"
import { DateRange } from "react-day-picker"
import { ptBR } from "react-day-picker/locale"
import { format } from "date-fns"
import { ptBR as ptBRDateFns } from "date-fns/locale"
import { CalendarDays } from "lucide-react"
import { Calendar } from "../ui/calendar"
import { Input } from "../ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

const formatDate = (date: Date) =>
  format(date, "dd/MM/yyyy", { locale: ptBRDateFns })

export function BraszilianCalendar() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>()

  const value =
    dateRange?.from && dateRange.to
      ? `${formatDate(dateRange.from)} até ${formatDate(dateRange.to)}`
      : ""

  return (
    <Popover>
      <div className="relative">
        <CalendarDays className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-blue-400" />
        <PopoverTrigger
          nativeButton={false}
          render={
            <Input
              id="calndar-filter"
              readOnly
              value={value}
              placeholder="Selecione uma data"
              className="cursor-pointer pl-9"
            />
          }
        />
      </div>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  )
}
