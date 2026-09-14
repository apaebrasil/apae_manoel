"use client"

import { ptBR } from "react-day-picker/locale"
import { Calendar } from "../ui/calendar"
import { useCallback, useEffect, useState } from "react"
import { DateRange } from "react-day-picker"
import { format } from "date-fns"

export function BraszilianCalendar() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>()

  const setValueCalendarInput = useCallback(() => {
    const element = document.getElementById("calndar-filter")
    if (element instanceof HTMLInputElement) {
      if (dateRange?.to && dateRange.from) {
        element.value = `${format(dateRange.from, "yyy-MM-dd")} - ${format(dateRange.to, "yyy-MM-dd")}`
      }
    }
  }, [dateRange])

  useEffect(() => {
    setValueCalendarInput()
  }, [setValueCalendarInput])

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="px-0"
      locale={ptBR}
    />
  )
}
