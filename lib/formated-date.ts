import { DateParts } from "@/types/date-type"

export function formatedDate({ dayOfMonth, monthValue, year }: DateParts) {
  return new Date(year, monthValue - 1, dayOfMonth).toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  )
}
